import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/testimonialCard/')({
  component: TestimonialCard
})

function TestimonialCard() {
    return (
        <div className="bg-white w-full border border-neutral-200 rounded-lg shadow max-w-[340px] mx-auto">
            <div className="flex flex-col p-6 gap-4">
                <div className="flex gap-4">
                <img className="size-12" src="./img/profile-thumbnail.png" alt="" />
                <div>
                    <h2 className="text-lg text-neutral-900 font-semibold">Sarah Dole</h2>
                    <p className="text-xs text-neutral-600">@sarahdole</p>
                </div>
                </div>
                <p className="text-neutral-600 text-base line-clamp-5">I've been searching for high-quality abstract images for my design projects, 
                and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!</p>
            </div>
        </div>
    )
}