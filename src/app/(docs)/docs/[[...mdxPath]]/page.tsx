import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents } from "../../../../mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: any) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

const Wrapper = useMDXComponents().wrapper;

export default async function Page(props: any) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <div className="max-w-4xl md:prose-lg lg:prose-xl md:px-10 px-3 prose-zinc">
        <MDXContent {...props} params={params} />
      </div>
    </Wrapper>
  );
}
