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
    <div className="bg-white w-full border border-neutral-200 rounded-lg shadow max-w-[340px] font-normal">
      <div className="flex flex-col p-6 gap-4">
        <div className="flex gap-4">
          <img className="size-12" src={imgUrl} alt="" />
          <div>
            <h2 className="text-lg text-neutral-900 font-semibold">
              {fullName}
            </h2>
            <p className="text-xs text-neutral-600">@{username}</p>
          </div>
        </div>
        <p className="text-neutral-600 text-base line-clamp-5">{comment}</p>
      </div>
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
