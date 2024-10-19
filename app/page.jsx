import Link from 'next/link';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

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
        </main>
    );
}
