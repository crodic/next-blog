'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormState } from 'react-dom';
import { changePassword } from '../actions';
import { useEffect, useRef } from 'react';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next-nprogress-bar';

export default function ChangePasswordForm() {
    const [state, actionChange] = useFormState(changePassword, null);
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state?.name) {
            toast({
                title: 'Thành công!',
                description: 'Cập nhật mật khẩu thành công',
            });
            formRef.current?.reset();
        }
    }, [state, router]);

    return (
        <form ref={formRef} action={actionChange} className="space-y-4 mt-4">
            <div className="space-y-2">
                <Label>Mật khẩu hiện tại</Label>
                <Input name="password" placeholder="Enter your current password" type="password" />
            </div>
            {state?.error?.password && <p className="text-red-500">{state.error.password}</p>}
            <div className="space-y-2">
                <Label>Mật khẩu mới</Label>
                <Input name="newPassword" placeholder="Enter your new password" type="password" />
            </div>
            {state?.error?.newPassword && <p className="text-red-500">{state.error.newPassword}</p>}
            <div className="space-y-2">
                <Label>Nhập lại mật khẩu mới</Label>
                <Input name="confirmPassword" placeholder="Confirm your new password" type="password" />
            </div>
            {state?.error?.confirmPassword && <p className="text-red-500">{state.error.confirmPassword}</p>}
            <Button type="submit">Cập nhật mật khẩu</Button>
        </form>
    );
}
