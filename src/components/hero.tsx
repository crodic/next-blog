import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Hero() {
    return (
        <div className="flex justify-center items-center flex-col gap-3 py-24">
            <h4 className="text-xl font-semibold text-primary" style={{ fontFamily: 'var(--font-dancing-script)' }}>
                Animazing Blogs
            </h4>
            <h2 className="font-semibold text-4xl uppercase text-center">Front end and Game</h2>
            <p className="text-center">
                Blog chia sẽ về kiến thức lập trình front-end và thông tin về các tựa game hay hiện nay.
            </p>
            <div className="mt-8">
                <div className="flex justify-center items-start gap-3 flex-wrap">
                    <div className="space-y-2">
                        <Input type="email" placeholder="Enter your email" className="w-80" />
                        <p className="text-xs text-muted-foreground">Nhận thông báo khi có bài viết mới.</p>
                    </div>
                    <Button>Đăng ký</Button>
                </div>
            </div>
        </div>
    );
}
