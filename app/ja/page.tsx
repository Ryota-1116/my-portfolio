import Link from 'next/link'

export default function JaPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">

            {/* Nav */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 z-10">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <span className="font-semibold text-gray-900 text-sm">川本 涼太</span>
                    <Link href="/en" className="hover:text-gray-900 transition-colors">EN</Link>
                    <div className="hidden md:flex gap-8 text-sm text-gray-500">
                        <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
                        <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
                        <a href="#works" className="hover:text-gray-900 transition-colors">Works</a>
                        <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="max-w-4xl mx-auto px-6 pt-40 pb-32">
                <p className="text-blue-600 font-medium mb-4">フルスタックエンジニア志望</p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">川本 涼太</h1>
                <p className="text-gray-500 text-lg mb-8">📍 バンクーバー, BC, カナダ</p>
                <div className="flex gap-4">
                    <a href="https://github.com/Ryota-1116" target="_blank" className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">GitHub</a>
                    <a href="mailto:ryota.kawamoto16@gmail.com" className="border border-gray-300 text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">Email</a>
                </div>
            </section>

            {/* About */}
            <section id="about" className="bg-gray-50 py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-blue-600 font-medium mb-2">About</p>
                    <h2 className="text-4xl font-bold mb-8">自己紹介</h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">カナダのバンクーバーにCO-OP留学中。Web Developmentのコースで学びながら、実際にアプリを作ることでスキルを磨いています。フロントエンドからバックエンドまで幅広く学び、フルスタックエンジニアを目指しています。</p>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-blue-600 font-medium mb-2">Skills</p>
                    <h2 className="text-4xl font-bold mb-12">スキル</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="font-bold text-gray-900 mb-4">フロントエンド</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>HTML / CSS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Next.js</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="font-bold text-gray-900 mb-4">バックエンド</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>Node.js</li>
                                <li>Prisma</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="font-bold text-gray-900 mb-4">ツール</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>Git / GitHub</li>
                                <li>Supabase</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Works */}
            <section id="works" className="bg-gray-50 py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-blue-600 font-medium mb-2">Works</p>
                    <h2 className="text-4xl font-bold mb-12">制作物</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-8 border border-gray-100">
                            <h3 className="font-bold text-lg mb-2">天気アプリ</h3>
                            <p className="text-gray-500 text-sm mb-4">OpenWeatherMap APIを使った天気検索アプリ</p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">React</span>
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">TypeScript</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-gray-100">
                            <h3 className="font-bold text-lg mb-2">GitHubプロフィール検索</h3>
                            <p className="text-gray-500 text-sm mb-4">GitHubのユーザー情報を検索・表示するアプリ</p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">React</span>
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">TypeScript</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-gray-100">
                            <h3 className="font-bold text-lg mb-2">ToDoアプリ</h3>
                            <p className="text-gray-500 text-sm mb-4">CRUD・LocalStorage対応のToDoアプリ</p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">React</span>
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">TypeScript</span>
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">useEffect</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-gray-100">
                            <h3 className="font-bold text-lg mb-2">ポモドーロタイマー</h3>
                            <p className="text-gray-500 text-sm mb-4">作業・休憩モード切り替え対応のタイマー</p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">React</span>
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">TypeScript</span>
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">useRef</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-blue-600 font-medium mb-2">Contact</p>
                    <h2 className="text-4xl font-bold mb-8">連絡先</h2>
                    <div className="space-y-2 text-gray-600 mb-8">
                        <p>GitHub: <a href="https://github.com/Ryota-1116" target="_blank" className="text-blue-600 hover:underline">github.com/Ryota-1116</a></p>
                        <p className="text-sm">Email: ryota.kawamoto16@gmail.com</p>
                    </div>
                </div>
            </section>

        </div>
    )
}