import { motion } from "framer-motion";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import audrey from "../../public/audrey.jpg";
import daphne from "../../public/daphne.jpg";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Take Your Kids to Work Day 2023</title>
        <meta
          name="description"
          content="Website made by Daphne and Audrey Newton"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed z-20 flex w-full items-center justify-between bg-gradient-to-b from-[rgba(0,0,0,0.45)] to-[rgba(0,0,0,0.01)] px-6 py-4">
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="logo text-center"
        >
          <Link href="#" className="text-2xl text-white">
            <span>Daphne &amp; Audrey</span>
          </Link>
        </motion.div>
        <nav>
          <motion.ul
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <li>
              <Link
                href="#daphne"
                className="font-bold text-gray-100 transition-colors hover:text-gray-300"
              >
                Daphne Newton
              </Link>
            </li>
            <li>
              <Link
                href="#audrey"
                className="font-bold text-gray-100 transition-colors hover:text-gray-300"
              >
                Audrey Newton
              </Link>
            </li>
          </motion.ul>
        </nav>
      </header>
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="fixed top-0 z-0 h-screen w-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]"></div>
        <section className="container z-10 flex min-h-screen flex-col items-center justify-center gap-12 px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            viewport={{ once: false }}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          >
            Take You Kid to Work Day 2023
          </motion.h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <motion.div
              initial={{ opacity: 0, translateX: -250 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              viewport={{ once: false }}
            >
              <Link
                className="flex max-w-md gap-6 rounded-xl border-2 border-transparent bg-white/10 p-4 text-white transition-all hover:border-white hover:bg-white/20"
                href="/#daphne"
              >
                <motion.div className="flex w-28 items-center justify-center">
                  <Image
                    src={daphne}
                    alt="Daphne"
                    className=" rounded-full"
                  ></Image>
                </motion.div>
                <div className="flex flex-1 flex-col gap-4">
                  <h3 className="text-2xl font-bold">
                    Daphne&apos;s Section →
                  </h3>
                  <div className="text-lg">
                    Learn more about Daphne and what she learned at take your
                    kid to work day!
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: 250 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              viewport={{ once: false }}
            >
              <Link
                className="flex max-w-md gap-6 rounded-xl border-2 border-transparent bg-white/10 p-4 text-white transition-all hover:border-white hover:bg-white/20"
                href="/#audrey"
              >
                <motion.div className="flex w-28 items-center justify-center">
                  <Image
                    src={audrey}
                    alt="Audrey"
                    className="rounded-full"
                  ></Image>
                </motion.div>
                <div className="flex flex-1 flex-col gap-4">
                  <h3 className="text-2xl font-bold">
                    Audrey&apos;s Section →
                  </h3>
                  <div className="text-lg">
                    Learn more about Audrey and what she learned at take your
                    kid to work day!
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
        <section
          className="container z-10 flex min-h-screen flex-col items-center justify-center gap-12 border-y-2 border-white px-4 py-16"
          id="daphne"
        >
          <motion.h2
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-4xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          >
            Daphne Newton
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, translateY: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.75, delay: 0.75 }}
            viewport={{ once: true }}
            className="flex w-full max-w-5xl flex-1 flex-col text-white"
          >
            <motion.h3 className="mb-6 mt-8 text-center text-3xl font-bold">
              What I Learned Today 🫶
            </motion.h3>
            <motion.div className=" mx-auto flex max-w-xl flex-col gap-4 text-center">
              <p>
                I learned that my dad usually works from home but he took us to
                his office in Claysville. He makes websites and web applications
                that his customers use.
              </p>
              <p>
                We learned a little bit about how websites work and how to code
                them. We also learned how to publish a website online so that
                othe people can see it.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="flex w-full max-w-5xl flex-1 flex-col text-white">
            <motion.h3
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.75, delay: 0.75 }}
              viewport={{ once: true }}
              className="mb-6 mt-8 text-center text-3xl font-bold"
            >
              🐴 Horse Breeds 🐴
            </motion.h3>
            <motion.div className="text-lg ">
              <ul className="flex flex-col gap-12">
                <motion.li
                  initial={{ opacity: 0, translateX: 50 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.75,
                    delay: 0.5,
                  }}
                  viewport={{ once: false }}
                  className="flex flex-col rounded-xl border-2 border-white/90 p-6"
                >
                  <div className="flex flex-col gap-8 md:flex-row">
                    <img
                      src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRfcOQsAHDB2XW4XowH2pFLCWLb5xall1QDu3IjrBVNnf0k5axTEjQfQsgJwUxYp7hwhaOcRVoiuCPeK9o"
                      alt="Fresian Horse"
                      className="aspect-square object-cover"
                      width={300}
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="mb-3 text-3xl">Fresian</h4>
                      <p>
                        The Fresian horse is one of my favorites because they
                        are so beautiful and I love their hair. They are also
                        really good for farm work.
                      </p>
                      <strong>Facts About Fresians:</strong>
                      <ol className=" list-decimal pl-8">
                        <li>Fresian horses are an ancient breed.</li>
                        <li>Friesian horses do not only have black coats.</li>
                        <li>Friesian horses have their own unique carriage.</li>
                        <li>
                          Friesian horses received their moniker from their
                          originating location.
                        </li>
                        <li>
                          Friesian horses have a calm and steady personality.
                        </li>
                      </ol>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, translateX: 50 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.75,
                    delay: 0.5,
                  }}
                  viewport={{ once: false }}
                  className="flex flex-col rounded-xl border-2 border-white/90 p-6"
                >
                  <div className="flex flex-col gap-8 md:flex-row">
                    <img
                      src="https://saddleupcolorado.net/product_images/uploaded_images/7masvpsef4921.jpg"
                      alt="Fresian Horse"
                      className="aspect-square object-cover"
                      width={300}
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="mb-3 text-3xl">Gypsy Vanner</h4>
                      <p>
                        They are one of my favorite horses because they are very
                        beautiful and majestic!
                      </p>
                      <strong>Facts About Gypsy Vanner Horses:</strong>
                      <ol className=" list-decimal pl-8">
                        <li>
                          They are Considered to Be One of the Most Beautiful
                          Horses in the World.
                        </li>
                        <li>They Were Bred by the Gypsies of Great Britain.</li>
                        <li>The Registry was Founded in the 90&apos;s.</li>
                        <li>Their Name Refers to How they Were Used.</li>
                        <li>They Have Feathering</li>
                      </ol>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, translateX: 50 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.75,
                    delay: 0.5,
                  }}
                  viewport={{ once: false }}
                  className="flex flex-col rounded-xl border-2 border-white/90 p-6"
                >
                  <div className="flex flex-col gap-8 md:flex-row">
                    <img
                      src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRi4dlnT0jYm5Bt60Og0WTHVr4H2qNpEpEO-OoJ2IPjFm0LTcKz1mKDCztNOBsUzIkVtba16F_ACs5t5k8"
                      alt="Fresian Horse"
                      className="aspect-square object-cover"
                      width={300}
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="mb-3 text-3xl">Tennessee Walker</h4>
                      <p>
                        They are one of my favorite horses because my favorite
                        horse was a Tennessee Walker.
                      </p>
                      <strong>Facts About Tennessee Walkers:</strong>
                      <ol className=" list-decimal pl-8">
                        <li>It is known as an especially intelligent horse</li>
                        <li>It has a unique gait called the running walk</li>
                        <li>
                          Some of these horses have suffered physical abuse
                          known as soring in an effort to exaggerate their
                          running walk gait
                        </li>
                        <li>
                          The first official national celebration of these
                          horses took place in 1939
                        </li>
                        <li>
                          Singer Roy Roger&apos;s horse Trigger Jr. was a
                          Tennessee Walker
                        </li>
                      </ol>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, translateX: 50 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.75,
                    delay: 0.5,
                  }}
                  viewport={{ once: false }}
                  className="flex flex-col rounded-xl border-2 border-white/90 p-6"
                >
                  <div className="flex flex-col gap-8 md:flex-row">
                    <img
                      src="https://www.horsebreedspictures.com/wp-content/uploads/2015/10/Black-Forest-Horse.jpg"
                      alt="Fresian Horse"
                      className="aspect-square object-cover"
                      width={300}
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="mb-3 text-3xl">Black Forest</h4>
                      <p>
                        They are one of my favorite horses because I like how
                        their mane is the opposite of the rest of their body.
                      </p>
                      <strong>Facts About Black Forests:</strong>
                      <ol className=" list-decimal pl-8">
                        <li>
                          Black Forest Horses Originate From The 15th Century
                        </li>
                        <li>
                          Several Breeds Influenced The Black Forest Horse
                        </li>
                        <li>
                          The Black Forest Horse is an Endangered Horse Breed
                        </li>
                        <li>
                          The Marbuch Stud Farm In Germany Preserves And
                          Promotes The Breed
                        </li>
                        <li>
                          Black Forest Horses Originally Worked In Agriculture
                          And Forestry
                        </li>
                      </ol>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, translateX: 50 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.75,
                    delay: 0.5,
                  }}
                  viewport={{ once: false }}
                  className="flex flex-col rounded-xl border-2 border-white/90 p-6"
                >
                  <div className="flex flex-col gap-8 md:flex-row">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/49/ChestnutSilver.jpg"
                      alt="Morgan Horse"
                      className="aspect-square object-cover"
                      width={300}
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="mb-3 text-3xl">Morgan</h4>
                      <p>
                        They are one of my favorites because they are very easy
                        to ride and they are very kind.
                      </p>
                      <strong>Facts About Morgans:</strong>
                      <ol className=" list-decimal pl-8">
                        <li>
                          The Morgan Horse Breed is One of the Oldest American
                          Horse Breeds
                        </li>
                        <li>
                          The Breed Aided in the Development of Several American
                          Horse Breeds
                        </li>
                        <li>There are Some Gaited Morgan Horses</li>
                        <li>
                          Most Morgan Horses Have Black, Bay, or Chestnut Coats
                        </li>
                        <li>The Morgan Horse Breed Excels at Harness Racing</li>
                      </ol>
                    </div>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </section>
        <section
          className="container z-10 flex min-h-screen flex-col items-center justify-center gap-12 border-y-2 border-white px-4 py-16"
          id="audrey"
        >
          <motion.h1
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
          >
            Audrey Newton
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, translateY: 0 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.75, delay: 0.75 }}
            viewport={{ once: true }}
            className="flex w-full max-w-5xl flex-1 flex-col text-white"
          >
            <motion.h3 className="mb-6 mt-8 text-center text-3xl font-bold">
              What I Learned Today 👍
            </motion.h3>
            <motion.div className=" mx-auto flex max-w-xl flex-col gap-4 text-center">
              <p>
                I learned that my dad usually works from home but he took us to
                his office in Claysville. He makes websites and web applications
                that his customers use.
              </p>
              <p>
                We learned a little bit about how websites work and how to code
                them. We also learned how to publish a website online so that
                othe people can see it.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="flex w-full max-w-5xl flex-1 flex-col text-white">
            <motion.h3
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.75, delay: 0.75 }}
              viewport={{ once: true }}
              className="mb-6 mt-8 text-center text-3xl font-bold"
            >
              🐶 Puppies! 🐶
            </motion.h3>
            <motion.div className="text-lg ">
              <ul className="flex flex-col gap-12">
                <motion.li
                  initial={{ opacity: 0, translateX: 50 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.75,
                    delay: 0.5,
                  }}
                  viewport={{ once: false }}
                  className="flex flex-col rounded-xl border-2 border-white/90 p-6"
                >
                  <div className="flex flex-col gap-8 md:flex-row">
                    <img
                      src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQYdOSN4TVR9hf_D4i_03hAXFUzWYFbjZQudsMsuVToUZHPqvGSd5e5j-Qs26OsFRIF2EhNHybE7t_WWfE"
                      alt="Fresian Horse"
                      className="aspect-square object-cover"
                      width={300}
                      height={300}
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="mb-3 text-3xl">Border Collie</h4>
                      <p>
                        My dog, Teddy, is a border collie! He is so cute, so
                        fuzzy, has long hair, and always loves to play.
                      </p>
                      <strong>Facts About Border Collies:</strong>
                      <ol className=" list-decimal pl-8">
                        <li>They Are Extremely Smart Dogs</li>
                        <li>Their Name Comes From Their Home Region</li>
                        <li>They Are Champion Herders</li>
                        <li>Queen Victoria Loved Them</li>
                        <li>One Was Featured in Scottish Poetry</li>
                      </ol>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, translateX: 50 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.75,
                    delay: 0.5,
                  }}
                  viewport={{ once: false }}
                  className="flex flex-col rounded-xl border-2 border-white/90 p-6"
                >
                  <div className="flex flex-col gap-8 md:flex-row">
                    <img
                      src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRv0vZ3TceUwsZ5WDkysr4Y_2soBmWkOB7z04KLCXrEc4jzdqaQFi99PGK8AtI8JDrUSkxNDPHs6CLGjrA"
                      alt="Fresian Horse"
                      className=" aspect-square object-cover"
                      width={300}
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="mb-3 text-3xl">Pug</h4>
                      <p>
                        I love Pugs becaseu they are so adorable with there
                        adorable small noses. I just love them!
                      </p>
                      <strong>Facts About Pugs:</strong>
                      <ol className=" list-decimal pl-8">
                        <li>Buddhist Monks Kept Them as Pets</li>
                        <li>They Were Bred to Be Lap Dogs</li>
                        <li>Their Face Wrinkles Are a Badge Of Honor</li>
                        <li>
                          Their Name Probably Comes From Their Facial Expression
                        </li>
                        <li>One Pug Saved His Royal Master&apos;s Life</li>
                      </ol>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, translateX: 50 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.75,
                    delay: 0.5,
                  }}
                  viewport={{ once: false }}
                  className="flex flex-col rounded-xl border-2 border-white/90 p-6"
                >
                  <div className="flex flex-col gap-8 md:flex-row">
                    <img
                      src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRxfqSjBuNplIuvG_nvuHF9qkZ2F6cWhhl55GqxZ_kZNPJ9KsaerGhfnyinsDNuUrz7I2AiwvitRqgHflg"
                      alt="Fresian Horse"
                      className=" aspect-square object-cover"
                      width={300}
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="mb-3 text-3xl">Poodle</h4>
                      <p>
                        I love poodles because of their fuzzy hair. I love to
                        touch their ears and they are so beautiful.
                      </p>
                      <strong>Facts About Poodles:</strong>
                      <ol className=" list-decimal pl-8">
                        <li>Poodles first originated in Germany, not France</li>
                        <li>They were originally bred as hunting dogs</li>
                        <li>
                          The Poodle cut is meant for function, not fashion
                        </li>
                        <li>There are a variety of hairstyles for Poodles</li>
                        <li>
                          Poodles come in three size varieties, but all follow
                          one breed standard
                        </li>
                      </ol>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, translateX: 50 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.75,
                    delay: 0.5,
                  }}
                  viewport={{ once: false }}
                  className="flex flex-col rounded-xl border-2 border-white/90 p-6"
                >
                  <div className="flex flex-col gap-8 md:flex-row">
                    <img
                      src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSGFmHdpUwQvjLSaGVnl195DD4_f6NrJyy79EdbUh_OPLKpMrnU0P0Hqu-qATMhFP2n6l7FJj7kjQP4j2w"
                      alt="Fresian Horse"
                      className=" aspect-square object-cover"
                      width={300}
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="mb-3 text-3xl">Great Dane</h4>
                      <p>
                        I love great danes because they are so wild and so tall.
                        They are so much fun to play with. They will play with
                        you all night and I love their furr.
                      </p>
                      <strong>Facts About Great Danes:</strong>
                      <ol className=" list-decimal pl-8">
                        <li>Great Danes are the tallest dogs in the world</li>
                        <li>
                          Despite their daunting size, Danes are highly
                          affectionate and social
                        </li>
                        <li>Daily exercise is a must for this big breed</li>
                        <li>Great Danes tend to follow their noses</li>
                        <li>Proper training is essential with Great Danes</li>
                      </ol>
                    </div>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Home;
