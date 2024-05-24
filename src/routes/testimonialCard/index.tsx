import { createFileRoute } from "@tanstack/react-router";
import imgUrl from "@/assets/profile-thumbnail.png";
import ChallengeWrapper from "@/components/challengeWrapper";

export const Route = createFileRoute("/testimonialCard/")({
  component: TestimonialCardPage,
});

function TestimonialCard({
  fullName,
  username,
  comment,
  imgUrl,
}: {
  fullName: string;
  username: string;
  comment: string;
  imgUrl: string;
}) {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg shadow max-w-[340px] font-normal p-6 flex flex-col space-y-4">
      <div className="flex space-x-4 items-center">
        <img className="size-12 rounded-full" src={imgUrl} alt="" />
        <div>
          <h2 className="text-lg text-neutral-900 font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
            {fullName}
          </h2>
          <p className="text-sm text-zinc-600 text-ellipsis whitespace-nowrap overflow-hidden">
            @{username}
          </p>
        </div>
      </div>
      <p className="text-neutral-600 text-base line-clamp-5">{comment}</p>
    </div>
  );
}

function TestimonialCardPage() {
  return (
    <ChallengeWrapper offset="200px">
      <TestimonialCard
        fullName="Sarah Dole"
        username="sarahdole"
        comment="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
        imgUrl={imgUrl}
      />
    </ChallengeWrapper>
  );
}
