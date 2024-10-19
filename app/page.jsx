import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    { text: 'Hello', linkText: 'someLink', href: '/' }
];



const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <ContextAlert />
                <h1 className="mb-0">HeritageTree — Create your own heritage tree!</h1>
                <p className="text-lg">Just drag and drop nodes and get started</p>
                <Link
                    href="/"
                    className="btn btn-lg btn-primary sm:btn-wide"
                >
                    Get started
                </Link>
            </section>

            { !!cards?.length && <CardsGrid cards={cards} /> }
        </main>
    );
}
