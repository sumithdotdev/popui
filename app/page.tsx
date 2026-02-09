import Background from "@/components/Background";
import Card from "@/components/Card";
import MiniCard from "@/components/MiniCard";
import Navbar from "@/components/Navbar";
import Toggle from "@/components/Toggle";
import { FaCaretDown } from "react-icons/fa";

export default function Home() {
  const card_one = [
    "Unlimited Clients & Projects",
    "Proposals",
    "Contracts"
  ]

  const card_two = [
    "Everything in Workflow, plus…",
    "White-labelled client experience",
    "Client forms and questionnaires (Now)"
  ]

  return (
    <div>
      {/* Background */}
      <Background />

      {/* Navbar */}
      <Navbar />

      {/* Main page -> Cards */}
      <main className="mt-20 mx-20 flex flex-col gap-y-10 items-center">
        <div className="flex w-5xl justify-between">
          <div>
            <p className="text-black text-4xl">Plans & Pricing</p>
          </div>
          <div className="flex gap-x-2 text-black text-xl items-center">
            <p>Monthly</p>
            <Toggle />
            <p>Yearly</p>
          </div>
        </div>

        <div className="flex w-5xl justify-between">
          <Card title={"Workflow"} cost={19} info={card_one} />
          <Card title={"Workflow Plus"} cost={29} info={card_two} />
        </div>

        <div className="flex flex-col mt-10 items-center gap-y-15 w-full">
          <p className="text-black tracking-wider text-2xl">Super charge your work with add-ons</p>
          <div className="flex flex-col gap-y-10">
            <MiniCard title="Collaborators" info="Invite other users to specific projects for limited access and functionality." cost={0} />
            <MiniCard title="Partners" info="Invite other users for full account access and company management." cost={9} />
            <MiniCard title="Bonsai Tax" info="Track expenses and identify write-offs, and estimate quarterly taxes easily." cost={10} />
          </div>
        </div>

        <div className="flex justify-around items-center gap-x-50 w-255 mt-10 bg-[#caf0f9]">
          <div className="flex flex-col text-black tracking-wider text-3xl m-20">
            <div className="flex gap-x-2">
              <p>It's</p>
              <p className="text-[#00b289]">your</p>
              <p>business</p>
            </div>
            <div><p>and we're here to help it grow.</p></div>
          </div>

          <button className="bg-[#00b289] p-3 px-5 h-13 mr-auto rounded-sm text-white text-sm font-bold tracking-wider">
            START FREE
          </button>
        </div>

        {/* FAQ */}
        <div className="flex flex-col gap-y-7 mt-5 mb-5">
          <p className="text-[#00b289] text-2xl font-extralight tracking-wider text-center">Frequently Asked Questions</p>
          <div className="text-black tracking-wider text-xl flex flex-col gap-y-3 w-150">
            <div className="flex justify-between">
              <p>How does the 14 day free trial work?</p>
              <FaCaretDown color="lightgray" />
            </div>
            <div className="flex justify-between">
              <p>Can I change plans anytime?</p>
              <FaCaretDown color="lightgray" />
            </div>
            <div className="flex justify-between">
              <p>How do I pause my Bonsai subscription?</p>
              <FaCaretDown color="lightgray" />
            </div>
            <div className="flex justify-between">
              <p>What is your refund policy?</p>
              <FaCaretDown color="lightgray" />
            </div>
          </div>
        </div>

        <footer className="flex w-screen justify-around mt-20 p-10 bg-[#caf0f9] ">
          <div className="flex flex-col gap-y-7">
            <p className="text-black font-bold tracking-wide">PRODUCT</p>

            <div className="text-gray-700 text-sm">
              <p>Proposals</p>
              <p>Contracts</p>
              <p>Invoicing</p>
            </div>

            <div>
              <p className="text-[#00b289] text-sm">Pricing</p>
              <p className="text-black text-sm mt-2">Bonsai Reviews</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <p className="text-black font-bold tracking-wide">FREE RESOURCES</p>

            <div className="text-gray-700 text-sm">
              <p>Freelance Resources</p>
              <p>Freelance Blogs by Bonsai</p>
              <p>How to Write a Contract</p>
            </div>

            <div>
              <p className="text-black font-bold tracking-wide text-sm">Templates</p>
              <div className="mt-2">
                <div className="text-black text-sm flex items-center gap-x-1">
                  <p>Invoice Templates</p>
                  <FaCaretDown color="gray" />
                </div>
                <div className="text-black text-sm flex items-center gap-x-1">
                  <p>Proposal Templates</p>
                  <FaCaretDown color="gray" />
                </div>
                <div className="text-black text-sm flex items-center gap-x-1">
                  <p>Contract Templates</p>
                  <FaCaretDown color="gray" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-7">
            <p className="text-black font-bold tracking-wide">BONSAI</p>
            <div className="text-sm text-black">
              <p>About</p>
              <p>Careers</p>
              <p>Support</p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
