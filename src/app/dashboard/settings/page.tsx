import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const SwitchMode = dynamic(() => import('@/components/switch-mode'), { ssr: false });

export const metadata: Metadata = {
    title: 'DASHBOARD | Cài đặt chung',
    description: 'Trang cài đặt chung',
};

export default function Page() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Cài đặt chung</CardTitle>
                <CardDescription>Cấu hình không ảnh hưởng đến trang cài đặt này</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Label>Sáng/Tối</Label>
                <SwitchMode />
            </CardContent>
        </Card>
    );
}
