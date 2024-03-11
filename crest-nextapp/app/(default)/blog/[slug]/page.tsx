import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PostDate from "@/components/post-date";
import Separator from "@/components/separator";
import Newsletter from "@/components/newsletter";

const allPosts = [{ slug: "post-1" }, { slug: "post-2" }];

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts;

  if (!post) return;

  return {};
}

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Separator />

      <Newsletter />
    </>
  );
}
