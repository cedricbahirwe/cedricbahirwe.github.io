import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Cédric Bahirwe
      </h1>
      <p className="mb-4">
        {`I’m Cédric! I love crafting seamless iOS experiences and am currently diving into the world of Machine Learning & AI. I believe in the power of data and machine learning to create impactful solutions.`}
      </p>


      <a
        className="flex items-center underline text-red-700 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        target="_blank"
        href="https://docs.google.com/document/d/1410CnPGS9tPWG-Sahj3R-15tZkBW93iTHcZWn8htlwQ/"
      >
        <ArrowIcon />
        <p className="ml-2 h-7">Check my resume</p>
      </a>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
