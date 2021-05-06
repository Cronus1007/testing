from django.shortcuts import render


def admin(request):
    return render(request,'blog/blog.html',{})

def redirect(request):
    return render(request,'blog/index.html',{})