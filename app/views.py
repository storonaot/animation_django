from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, get_object_or_404, redirect

from .forms import FilmForm
from .models import Film

# def test_test(request):
#     return JsonResponse([1, 2, 3], safe=False)

def film_create(request):
    form = FilmForm(request.POST or None)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.save()
        messages.success(request, "Successfully Created")
        return HttpResponseRedirect(instance.get_absolute_url())
    context = {
        "form": form,
    }
    return render(request, "film_form.html", context)

def film_detail(request, id=None): #retrive
    instance = get_object_or_404(Film, id=id)
    context = {
        "title": instance.title,
        "instance": instance
    }
    return render(request, "film_detail.html", context)

def film_list(request): #list items
    queryset = Film.objects.all()

    context = {
        "object_list": queryset,
        "title": "List",
    }
    return render(request, "films_list.html", context)

def film_update(request, id=None):
    instance = get_object_or_404(Film, id=id)
    form = FilmForm(request.POST or None, instance=instance)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.save()
        messages.success(request, "Film Saved", extra_tags='some-tag')
        return HttpResponseRedirect(instance.get_absolute_url())
    context = {
        "title": instance.title,
        "instance": instance,
        "form": form,
    }
    return render(request, "film_form.html", context)

def film_delete(request, id=None):
    instance = get_object_or_404(Film, id=id)
    instance.delete()
    messages.success(request, "Successfully deleted")
    return redirect("films:list")
