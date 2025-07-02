<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', 'Portfolio - Software Developer')</title>
    <meta name="description" content="@yield('description', 'Software Developer Portfolio - Modern web development with focus on UI/UX design')">


    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800,900&display=swap" rel="stylesheet" />
    

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    

    @vite(['resources/css/app.css'])
    
    @stack('styles')
</head>
<body class="bg-gray-900 text-white font-inter antialiased">
    @yield('content')
    

    @vite(['resources/js/app.js', 'resources/js/portfolio.js'])
    
    @stack('scripts')
</body>
</html> 