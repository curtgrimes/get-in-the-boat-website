<script setup></script>

<template>
  <div class="bg-primary-2 p-24">
    <h3 class="h4 text-lg mb-12 flex items-center gap-8">
      <Icon name="mdi:email-open" /> Email Updates
    </h3>
    <p>
      Sign up for book updates &amp; behind-the-scenes material from "Get in the
      Boat" author Darlene Fuchs delivered to your inbox.
    </p>

    <form
      action="https://getintheboatbook.us21.list-manage.com/subscribe/post?u=d1aff03e50f28caaeec227376&amp;id=59f6dd1d2a&amp;f_id=007451e1f0"
      method="post"
      class="flex gap-12 flex-col lg:flex-row"
      target="_self"
      novalidate=""
    >
      <input
        type="email"
        name="EMAIL"
        required
        placeholder="Enter your email address..."
        class="w-full p-12"
      />
      <div aria-hidden="true" class="absolute -left-[5000px]">
        <!-- Add Mailchimp honeypot for catching some bots -->
        <input
          type="text"
          name="b_d1aff03e50f28caaeec227376_59f6dd1d2a"
          tabindex="-1"
          value=""
        />
      </div>
      <button type="submit" class="button justify-center">Subscribe</button>
    </form>
  </div>
</template>
