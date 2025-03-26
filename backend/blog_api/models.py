from django.db import models

# Django models represent tables in the database


# Create your models here.
class category(models.Model):
    # CharField is used for text-based fields of limited length.
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="images", null=True, blank=True)

    class Meta:
        verbose_name_plural = "Categories"  # This changes the plural name of the model in the admin panel from "Categorys" to "Categories".

    # __str__ method defines how the object will be represented as a string, here we're using the name of the category
    def __str__(self):
        return self.name


class blog(models.Model):
    category = models.ForeignKey(category, on_delete=models.CASCADE, null=True)
    # Establishes a foreign key relationship with the category model.
    # ForeignKey is a one-to-many relationship. Each blog belongs to a single category, but a category can have multiple blogs.
    # on_delete defines the behavior when the related category is deleted.
    # CASCADE means that if a category is deleted, all associated blogs will also be deleted.
    # null=True allows this field to be empty in the database (i.e., the blog can exist without a category).
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    # SlugField is a field for storing URL-friendly text. Slugs are typically used in URLs (e.g., /blog/this-is-a-blog-post/). Django's SlugField ensures that the value contains only letters, numbers, underscores, or hyphens.
    excerpt = models.CharField(max_length=255, default="")
    # A short summary or preview of the blog content.
    # default="" means if no value is provided, the field will default to an empty string.
    content = models.TextField(null=True, blank=True)
    # TextField is large and not limited in size.
    # blank=True allows the field to be left empty in forms (useful for admin panel).
    image = models.ImageField(upload_to="images", null=True, blank=True)
    # a specialized field for handling image files.
    # upload_to="images" specifies the subdirectory (relative to the MEDIA_ROOT) where uploaded images will be stored. Since MEDIA_ROOT is /media/, the images will be stored in /media/images/.

    def __str__(self):
        return self.title
