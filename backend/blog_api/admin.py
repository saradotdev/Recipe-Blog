from django.contrib import admin
from .models import category, blog


# Customizing the Django admin panel for the blog model.
# This creates a custom admin class for the blog model by inheriting from admin.ModelAdmin.
# admin.ModelAdmin is a built-in Django class that allows us to customize how models are displayed in the admin panel.
class blogAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    # This automatically fills the slug field based on the title field in the Django admin panel.
    # {"field_to_fill": ("source_field",)}
    # e.g. title: "My First Blog" -> "slug": my-first-blog
    # If there were more fields inside the tuple, such as:
    # {"slug": ("title", "subtitle")}, the slug field would be filled based on the title and subtitle fields both. e.g. title: "My First Blog", subtitle: "A great start" -> "slug": my-first-blog-a-great-start


# Register your models here.
admin.site.register(category)
admin.site.register(blog, blogAdmin)
