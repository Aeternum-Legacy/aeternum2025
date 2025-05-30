//src/app/pricing/page.tsx
import NotFound from "../not-found";

export default function Pricing() {
  return (
    <main className="page-wrapper">
      <section className="hero-wrapper gap-y-5">
        <div>
          <h2 className="text-center">Flexible plans for every legacy</h2>
          <p className="max-w-2xl mx-auto text-[#4F4949]">
            Your memories deserve a secure, ad-free home—no matter the plan you
            choose.
          </p>
        </div>

        <div className="relative inline-block">
          <img
            src="/patterns/Highlight.svg"
            alt=""
            aria-hidden="true"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[70%] object-contain pointer-events-none opacity-30"
          />
          <p className="relative z-10 font-semibold ">Unlocked for All Users</p>
          <div className=""></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-12 mt-6">
          <div className="bg-muted rounded-xl p-6 text-left">
            <h4 className="mb-2">Basic</h4>
            <p className="text-2xl font-bold mb-1">$0</p>
            <p className="text-sm mb-4">Per month / user</p>
            <p className="mb-4">Perfect for getting started.</p>
            <ul className="text-left list-disc pl-5 space-y-1">
              <li>Free</li>
              <li>5 GB Data Storage Capacity</li>
              <li>Designated Digital Inheritor</li>
              <li>Legacy Messages</li>
            </ul>
          </div>

          <div className="bg-muted rounded-xl p-6 text-left">
            <h4 className="mb-2">Premium</h4>
            <p className="text-2xl font-bold mb-1">$2.99</p>
            <p className="text-sm mb-4">Per month / user</p>
            <p className="mb-4">More space, more memories.</p>
            <ul className="text-left list-disc pl-5 space-y-1">
              <li>100 GB Data Storage Capacity</li>
              <li>Multiple Users</li>
              <li>Automated Digital Inheritance System</li>
              <li>Enhanced Legacy Messages</li>
            </ul>
          </div>

          <div className="bg-muted rounded-xl p-6 text-left">
            <h4 className="mb-2">Legacy</h4>
            <p className="text-2xl font-bold mb-1">$9.99</p>
            <p className="text-sm mb-4">Per month / user</p>
            <p className="mb-4">
              Ultimate preservation for your family’s legacy.
            </p>
            <ul className="text-left list-disc pl-5 space-y-1">
              <li>2 TB Data Storage Capacity</li>
              <li>Multiple Users</li>
              <li>Automated Digital Inheritance System</li>
              <li>Enhanced Legacy Messages</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <h4>Compare Features By Category</h4>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-separate border-spacing-y-2">
            <thead className="text-sm font-semibold">
              <tr>
                <th className="p-2">Feature</th>
                <th className="p-2">Basic</th>
                <th className="p-2">Premium</th>
                <th className="p-2">Legacy</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-2">Monthly Price</td>
                <td className="p-2">Free</td>
                <td className="p-2">$2.99</td>
                <td className="p-2">$9.99</td>
              </tr>
              <tr>
                <td className="p-2">Annual Price</td>
                <td className="p-2">Free</td>
                <td className="p-2">$28.99</td>
                <td className="p-2">$95.99</td>
              </tr>
              <tr>
                <td className="p-2">Data Storage Capacity</td>
                <td className="p-2">5 GB</td>
                <td className="p-2">100 GB</td>
                <td className="p-2">2 TB</td>
              </tr>
              <tr>
                <td className="p-2">Shared Plan</td>
                <td className="p-2">–</td>
                <td className="p-2">Multiple Users</td>
                <td className="p-2">Multiple Users</td>
              </tr>
              <tr>
                <td className="p-2">Digital Inheritors</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
              </tr>
              <tr>
                <td className="p-2">Automated Inheritance</td>
                <td className="p-2">–</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
              </tr>
              <tr>
                <td className="p-2">Legacy Messages</td>
                <td className="p-2">✔</td>
                <td className="p-2">Enhanced</td>
                <td className="p-2">Enhanced</td>
              </tr>
              <tr>
                <td className="p-2">Ad-Free Private Family Connection</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
              </tr>
              <tr>
                <td className="p-2">Personal Family Tree</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
              </tr>
              <tr>
                <td className="p-2">Family Circle Sharing</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
              </tr>
              <tr>
                <td className="p-2">Collaborative Storytelling</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
              </tr>
              <tr>
                <td className="p-2">Memory Management</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
              </tr>
              <tr>
                <td className="p-2">Curated Profiles</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
                <td className="p-2">✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
