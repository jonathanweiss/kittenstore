import React from 'react';

const getRandomQuote = (() => {
  const quotes = [
    {
      text: '“I take care of my flowers and my cats. And enjoy food. And that’s living.”',
      person: 'Ursula Andress (actress, Dr. No)',
    },
    {
      text: '“I can’t have cats around me because they try to steal my energy.”',
      person: 'Roseanne Barr (actress, Roseanne)',
    },
    {
      text: '“A lie is like a cat: You need to stop it before it gets out the door or it’s really hard to catch.”',
      person: 'Charles M. Blow (columnist)',
    },
    {
      text: '“That’s the great secret of creativity. You treat ideas like cats: you make them follow you.”―Ray Bradbury (author, Fahrenheit 451)',
    },
    {
      text: '“Cats and dogs believe politicians are like cemetery caregivers ',
      person: ' they are on top of everyone, but nobody listens.”',
    },
    {
      text: '“My relationships with my cats has saved me from a deadly, pervasive ignorance.”',
      person: 'William S. Burroughs (author, The Naked Lunch)',
    },
    {
      text: '“Meow” means “woof” in cat.”',
      person: 'George Carlin (comedian)',
    },
    {
      text: '“It is very inconvenient habit of kittens (Alice had once made the remark) that, whatever you say to them they always purr.”',
      person: 'Lewis Carroll (author, Alice’s Adventures in Wonderland)',
    },
    {
      text: '“Cats choose us; we don’t own them.”',
      person: 'Kristin Cast (author, House of Night series)',
    },
    {
      text: '“Those who’ll play with cats must expect to be scratched.”',
      person: 'Miguel de Cervantes (author, Don Quixote)',
    },
    {
      text: '“I love cats because I enjoy my home; and little by little, they become its visible soul.”',
      person: 'Jean Cocteau (director, Orpheus)',
    },
    {
      text: '“Time spent with a cat is never wasted.”',
      person: 'Colette (author, Gigi)',
    },
    {
      text: '“Way down deep, we’re all motivated by the same urges. Cats have the courage to live by them.”',
      person: 'Jim Davis (cartoonist, Garfield)',
    },
    {
      text: '“What greater gift than the love of a cat?”',
      person: 'Charles Dickens (author, Great Expectations)',
    },
    {
      text: '“You see, wire telegraph is a kind of a very, very long cat. You pull his tail in New York and his head is meowing in ' +
      'Los Angeles. Do you understand this? And radio operates exactly the same way: you send signals here, they receive them there. ' +
      'The only difference is that there is no cat.”',
      person: 'Albert Einstein (theoretical physicist)',
    },
    {
      text: '“Making movies is like herding cats.”',
      person: 'Eric Fellner (movie producer, Fargo)',
    },
    {
      text: '“A countryman between two lawyers is like a fish between two cats.”',
      person: 'Benjamin Franklin (Founding Father of the United States)',
    },
    {
      text: '“Time spent with cats is never wasted.”',
      person: 'Sigmund Freud (psychoanalyst)',
    },
    {
      text: '“Cats know how to obtain food without labor, shelter without confinement, and love without penalties.”',
      person: 'Walter Lionel George (author, A Bed of Roses)',
    },
    {
      text: '“Cats will outsmart dogs every time.”',
      person: 'John Grogan (author, Marley & Me)',
    },
    {
      text: '“How we behave toward cats here below determines our status in heaven.”',
      person: 'Robert A. Heinlein (author, Red Planet)',
    },
    {
      text: '“A cat has absolute emotional honesty: human beings, for one reason or another, may hide their feelings, but a cat does not.”',
      person: 'Ernest Hemingway (author, For Whom the Bell Tolls)',
    },
    {
      text: '“Cats are connoisseurs of comfort.”',
      person: 'James Herriot (author, All Creatures Great and Small)',
    },
    {
      text: '“If your cat falls out of a tree, go indoors to laugh.”',
      person: 'Patricia Hitchcock (actress; daughter of movie director Alfred Hitchcock',
    },
    {
      text: '“If you want to write, keep cats.”',
      person: 'Aldous Huxley (author, Brave New World)',
    },
    {
      text: '“A cat can be trusted to purr when she is pleased, which is more than can be said for human beings.”',
      person: 'William Ralph Inge (author, Outspoken Essays)',
    },
    {
      text: '“Curiosity killed the cat.”',
      person: 'Ben Johnson (playwright, Every Man in His Humour)',
    },
    {
      text: '“I used to love dogs until I discovered cats.”',
      person: 'Nafisa Joseph (model)',
    },
    {
      text: '“Cats, like men, are flatterers.”',
      person: 'Walter Savage Landor (author, Imaginary Conversations)',
    },
    {
      text: '“The smallest feline is a masterpiece.”',
      person: 'Leonardo da Vinci (artist, Mona Lisa)',
    },
    {
      text: '“In its flawless grace and superior self-sufficiency I have seen a symbol of the perfect beauty and ' +
      'bland impersonality of the universe itself, objectively considered, and in its air of silent mystery there ' +
      'resides for me all the wonder and fascination of the unknown.”',
      person: 'H.P. Lovecraft (author, At the Mountains of Madness)',
    },
    {
      text: '“Artists like cats; soldiers like dogs.”',
      person: 'Desmond Morris (author, The Naked Ape)',
    },
    {
      text: '“Cats do not have to be shown how to have a good time, for they are unfailing ingenious in that respect.”',
      person: 'James Mason (actor, North by Northwest)',
    },
    {
      text: '“I regard cats as one of the great joys in the world. I see them as a gift of highest order.”',
      person: 'Trisha McCagh (animal communicator)',
    },
    {
      text: '“Cats have it all ',
      person: ' admiration, an endless sleep, and company only when they want it.”',
    },
    {
      text: '“A dog will flatter you but you have to flatter the cat.”',
      person: 'George Mikes (author, How to be an Alien)',
    },
    {
      text: '“People with insufficient personalities are fond of cats. These people adore being ignored.”',
      person: 'Henry Morgan (privateer)',
    },
    {
      text: '“Cats possess so many of the same qualities as some people that it is often hard to tell the people and the cats apart.”',
      person: 'P.J. O’Rourke (author, Parliament of Whores)',
    },
    {
      text: '“You can not look at a sleeping cat and feel tense.”',
      person: 'Jane Pauley (journalist, The Today Show)',
    },
    {
      text: '“I wish I could write as mysterious as a cat.”',
      person: 'Edgar Allan Poe (author, “The Raven”)',
    },
    {
      text: '“The problem with cats is that they get the same exact look whether they see a moth or an ax-murderer.”',
      person: 'Paula Poundstone (comedian)',
    },
    {
      text: '“There are two means of refuge from the miseries of life: music and cats.”',
      person: 'Albert Schweitzer (theologian and physician)',
    },
    {
      text: '“I am as vigilant as a cat to steal cream.”',
      person: 'William Shakespeare (playwright, Henry IV)',
    },
    {
      text: '“I have studied many philosophers and many cats. The wisdom of cats is infinitely superior.”―Hippolyte Taine (critic)',
    },
    {
      text: '“I have lived with several Zen masters ',
      person: ' all of them cats.”',
    },
    {
      text: '“Of all God’s creatures, there is only one that cannot be made slave of the lash. That one is the cat. ' +
      'If man could be crossed with the cat it would improve the man, but it would deteriorate the cat.”',
      person: 'Mark Twain (author, The Adventures of Tom Sawyer)',
    },
    {
      text: 'Cats are smarter than dogs. You can’t get eight cats to pull a sled through snow.”',
      person: 'Jeff Valdez (producer, Urban Jungle)',
    },
    {
      text: '“I believe cats to be spirits come to earth. A cat, I am sure, could walk on a cloud without coming through.”',
      person: 'Jules Verne (author, Journey to the Center of the Earth)',
    },
    {
      text: '“If a dog jumps into your lap it is because he is fond of you; but if a cat does the same thing it is  ' +
      'because your lap is warmer.”',
      person: 'A.N. Whitehead (mathematician and philosopher)',
    },
    {
      text: '“The phrase ‘domestic cat’ is an oxymoron.”',
      person: 'George Will (columnist)',
    },
  ];

  return () => {
    const index = Math.round(Math.random() * quotes.length);
    return quotes[index];
  };
})();

const Detail = (props) => {
  const catIndex = props.data.findIndex(cat => cat.slug === props.slug);
  const catData = props.data[catIndex];
  const quote = getRandomQuote();
  const price = 50 + Math.round(Math.random() * 100);

  return (
    <div className="columns">
      <div className="column col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">{catData.name}</h4>
            <h6 className="card-meta">{catData.race}</h6>
            <img alt={catData.name} src={`https://placekitten.com/200/200?image=${Math.round(Math.random() * 16)}`} />
          </div>
          <div className="card-body">
            <blockquote>
              <p>{quote.text}</p>
              <cite>&ndash; {quote.person}</cite>
            </blockquote>
            <p><span className={`label ${price < 100 ? 'label-success' : 'label-danger'}`}>${price}.99</span></p>
          </div>
          <div className="card-footer">
            <a href="/" className="btn btn-primary">Buy</a>
            <a href="/" className="btn btn-link">Share</a>
          </div>
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  slug: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
};

export default Detail;
