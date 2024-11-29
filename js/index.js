var quotes = [
  { description: '"So many books, so little time."', saidBy: "-- Frank Zappa" },
  {
    description: '"A room without books is like a body without a soul."',
    saidBy: "-- Marcus Tullius Cicero",
  },
  {
    description:
      '"You know you are in love when you can not fall asleep because reality is finally better than your dreams."',
    saidBy: "-- Dr. Seuss",
  },
  {
    description:
      '"You only live once, but if you do it right, once is enough."',
    saidBy: "-- Mae West",
  },
  {
    description: '"Be the change that you wish to see in the world."',
    saidBy: "-- Frank Zappa",
  },
  {
    description:
      '"In three words I can sum up everything I have learned about life: it goes on."',
    saidBy: "-- Robert Frost",
  },
  {
    description:
      '"If you tell the truth, you do not have to remember anything."',
    saidBy: "-- Mark Twain",
  },
  {
    description:
      '"A friend is someone who knows all about you and still loves you."',
    saidBy: "-- Elbert Hubbard",
  },
  {
    description:
      '"To live is the rarest thing in the world. Most people exist, that is all."',
    saidBy: "-- Oscar Wilde",
  },
  {
    description:
      '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    saidBy: "-- Mahatma Gandhi",
  },
  {
    description: '"We accept the love we think we deserve."',
    saidBy: "-- Stephen Chbosky, The Perks of Being a Wallflower",
  },
];

function generate() {
  var y = Math.floor(Math.random() * 11);
  var cartona = "";
  cartona += `<p class="my-4 display-6 fs-2 text-center fw-semibold">${quotes[y].description}</p>
            <p class="display-6 fs-2 text-center fw-semibold">${quotes[y].saidBy}</p>`;
  document.getElementById("generate").innerHTML = cartona;
}
