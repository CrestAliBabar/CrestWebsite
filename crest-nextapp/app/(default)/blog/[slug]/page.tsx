import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PostDate from "@/components/post-date";
import Separator from "@/components/separator";
import Newsletter from "@/components/newsletter";

export async function generateStaticParams() {}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {}

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
