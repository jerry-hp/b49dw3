class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }

  get author() {
    throw new Error("getAuthor() method must be implemented.");
  }

  get testimonialHTML() {
    return `
         <div class="testimonial">
              <img src="${this.#image}" alt="foto">
              <i>"${this.#quote}"</i>
              <b>${this.author}</b>
          </div>
    `;
  }
}

class AuthorTestimonial extends Testimonial {
  #author = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

class CompanyTestimonial extends Testimonial {
  #company = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#company = author;
  }

  get author() {
    return this.#company + " Company";
  }
}

const testimonial1 = new AuthorTestimonial("- neymar Jr", "Mantap sekali bang messi!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6QmRpuxYey5ITMHgUc7RJqsj6LBnqW-WjQ&usqp=CAU");

const testimonial2 = new AuthorTestimonial("- Leonel Messi", "well, well, well", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGxomiQ2M9d3KhnSWypgduqrdTWhiBEO1KQ&usqp=CAU");

const testimonial3 = new AuthorTestimonial("- Luis Suarez", "yok bisa yok", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrcrqaB5Hrs5WhxntlRs5tMAEaRI6U4NApQ&usqp=CAU");

let testimonialData = [testimonial1, testimonial2, testimonial3];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}

document.getElementById("testimonials").innerHTML = testimonialHTML;
console.log(testimonialHTML);
