import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { InfinityIcon } from "lucide-react"
import { courses } from "@/db/schema"

type Props = {
    activeCourse: typeof courses.$inferSelect,
    hearts: number,
    points: number,
    hasActiveSubscription: boolean

}
export const UserProgress = ({ activeCourse, hearts, points, hasActiveSubscription }: Props) => {
    return (
        <div className="flex w-full items-center justify-between gap-x-2">
            <Link href={"/courses"}>
                <Button variant={'ghost'}>
                    <Image src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-md border"
                        width={32}
                        height={32}
                    />
                </Button>
            </Link>
            <Link href={"/points"}>
                <Button variant={'ghost'} className="text-orange-500">
                    <Image src='/points.svg' alt="Point" className="mr-2" width={28} height={28} />{points}
                </Button>
            </Link>
            <Link href={"/heart"}>
                <Button variant={'ghost'} className="text-w-500">
                    <Image src="/heart.svg" alt="hearts" className="mr-2" width={28} height={28} />
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> : hearts}
                </Button>
            </Link>
        </div>
    )
}