import './global.css';
import Sidebar from './component/sidebar';
import { personalData } from '../data/page-data';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
            </head>
            <body className="flex flex-col sm:flex-row">
                <Sidebar data={personalData} />
                <main className="grow-full p-8 sm:p-16 w-full sm:basis-2/3 ml-auto">{children}</main>
            </body>
        </html>
    );
}
