import Link from 'next/link';

const SANTA_MARIA_MAPS_URL =
    'https://www.google.com/maps/place/Santa+Maria+-+RS/data=!4m2!3m1!1s0x9503cb5d0da567bf:0xa44d9c1e7f7f7297?sa=X&ved=2ahUKEwifgMiS2v6DAxXrGrkGHdNDBdAQ8gF6BAgPEAA';

export default function About() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-5">About my life</h1>
            <p className="text-lg">
                I live in{' '}
                <Link className="underline" href={SANTA_MARIA_MAPS_URL}>
                    Santa Maria, Rio Grande do Sul
                </Link>
            </p>
        </div>
    );
}
