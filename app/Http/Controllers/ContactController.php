<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:2000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            // Here you can add email sending logic
            // For now, we'll just simulate success
            
            // Example: Send email to yourself
            // Mail::raw($request->message, function ($message) use ($request) {
            //     $message->to('your-email@example.com')
            //             ->subject('Portfolio Contact: ' . $request->subject)
            //             ->replyTo($request->email, $request->name);
            // });

            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message! I\'ll get back to you soon.'
            ]);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error sending your message. Please try again later.'
            ], 500);
        }
    }
}
