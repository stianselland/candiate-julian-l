import Link from "next/link";

export default function Footer() {
  const urls = [
    {
      title: 'Product',
      links: [
        { name: 'Overview', url: '#' },
        { name: 'Pricing', url: '#' },
        { name: 'Marketplace', url: '#' },
        { name: 'Features', url: '#' },
        { name: 'Integrations', url: '#' }
      ]
    }
  ]

  let arr = []

  for (let x = 0; x < 6; x++) {
    arr.push(urls[0])
  }

  return (
    <footer className="bg-gray-50 py-12 md:px-16 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-12 md:mx-8 xl:gap-36 lg:gap-32 gap-24">
        {arr.map((url, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold text-gray-500" >
              {url.title}
            </h2>
            <div className="flex flex-col gap-3">
              {url.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-base text-gray-600 hover:text-gray-900 font-semibold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-9/12 h-px bg-gray-200 my-12 mx-auto" />
    </footer>
  )
}