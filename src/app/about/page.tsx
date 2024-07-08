import Link from 'next/link';

const SANTA_MARIA_MAPS_URL =
    'https://www.google.com/maps/place/Santa+Maria+-+RS/data=!4m2!3m1!1s0x9503cb5d0da567bf:0xa44d9c1e7f7f7297?sa=X&ved=2ahUKEwifgMiS2v6DAxXrGrkGHdNDBdAQ8gF6BAgPEAA';

export default function About() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-5">About My Life</h1>
            <p className="text-lg">
                My name is Gabriel de Oliveira Rodrigues, I'm 21 years old.
                Currently living in{' '}
                <Link className="underline" href={SANTA_MARIA_MAPS_URL}>
                    Santa Maria, Rio Grande do Sul
                </Link>
                , but I have the dream to live abroad.
            </p>
            <h1 className="text-4xl font-bold mt-7 mb-5">Hobbies</h1>
            <p className="text-lg">
                My mother taught me to play the piano when I was child and a
                love to play it, I like building legos, and most of the time
                play games on my computer, such as: Elden Ring, Valorant, CSGO, League of
                Legends sometimes. I like to study different things like,
                astronomy, physics and neuroscience.
            </p>
            <h1 className="text-4xl font-bold mt-7 mb-5">
                Programming History
            </h1>
            <p className="text-lg">
                I got know about programming in start of 2022, because a friend
                of mine started studying computer science on college and he
                thought I'd like it, and he was very right about it. I started
                to learn by myself, basically with youtube videos and I really
                loved it, and mainly I see the opportunity to change my life.{' '}
                <br />
                <br />
                I didn't start a degree because the university of my city was
                really far from my home and I thought that it would be more
                productive to study at home and I don't regret it. <br />
                After a few months studying I got a internship at one startup of
                my city and I stayed there for almost 2 years, until I got my
                current job at a company in London.
                <br />
                <br />
                Nowadays I really love to share my knowledge with others,
                creating articles trying to help everyone in this journey to
                learn programming.
            </p>
        </div>
    );
}
