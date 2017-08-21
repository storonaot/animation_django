from django.shortcuts import render

def IndexTemplate(request):
    return render(request, "index.html")
