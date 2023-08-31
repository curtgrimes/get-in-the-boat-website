<template>
  <SectionWrapper :with-text-gutter="false">
    <h2 class="h3 text-center mb-[100px]">Buy Now</h2>
    <div class="flex gap-x-16 flex-wrap xl:flex-nowrap justify-center gap-y-16">
      <BookFormat
        href="https://www.amazon.com/Get-Boat-Memoir-Dance-Dementia-ebook/dp/B0CG7CC2VN/"
        image-href="/img/kindle.png"
        title="Kindle eBook"
      />
      <BookFormat
        href="https://www.amazon.com/Get-Boat-Memoir-Dance-Dementia/dp/B0CGTP9Y96/"
        image-href="/img/book-cropped-paperback-hardcover.png"
        title="Paperback Edition"
      />
      <BookFormat
        href="https://www.amazon.com/Get-Boat-Memoir-Dance-Dementia/dp/B0CGVXYB6J/"
        image-href="/img/book-cropped-paperback-hardcover.png"
        title="Hardcover Author's Edition"
        subtitle="Includes photos of Richard and Gail's life throughout 64 years of
            marriage."
      />
    </div>
  </SectionWrapper>
</template>
