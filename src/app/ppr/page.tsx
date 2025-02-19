import { Suspense } from 'react';

type PPRPageProps = {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function PPRPage({ searchParams }: PPRPageProps) {
  return (
    <div>
      <h1>PPR Page</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsDetails searchParams={searchParams} />
      </Suspense>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        dolorum optio similique maiores id, odit tempora debitis enim qui, esse
        ipsum aliquam fugit reiciendis odio labore quas vero dicta facilis ex
        nemo quisquam ea libero sunt suscipit? Sit incidunt vel aspernatur eum
        placeat! Dignissimos ad natus minima nulla magnam veritatis.
      </p>
    </div>
  );
}

const SearchParamsDetails = async ({ searchParams }: PPRPageProps) => {
  const { page = '1', query = '' } = await searchParams;

  return (
    <div>
      <p>Page: {page}</p>
      <p>Query: {query}</p>
    </div>
  );
};
