import banner from '../../public/me.jpg'

const AboutUs = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 text-purple-800 p-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to <span className="font-bold">Page Turners</span>—your go-to destination for academic success!🎉 </p>

          <p className="mt-4 text-lg text-gray-600">
          As a second-year computer science student, I understand the importance of having the right resources, especially during those crucial last-minute
           study sessions before exams. Page Turner is born that , it offers a curated  collection of essential books, handpicked and highly recommended by our professors, designed
            to alleviate the stress of last-minute cramming. 
          I believe that access to quality educational materials shouldn't be a hurdle, but a seamless part of the learning process. </p>

          <p className="mt-4 text-lg text-gray-600">
          Beyond simply providing a list of books, Page Turner also offers an exclusive section with structured access to free books, making valuable resources
           even more readily available. 
          My goal is to create a platform that empowers students by providing a focused and efficient way to find the academic tools they need. </p>

          <p className="mt-4 text-lg text-gray-600">
           The feedback of our users and am continuously striving to improve it's services. If you have suggestions or questions, please don't hesitate to reach out ,do message on the 'Contact Us' section . Always open to communication, and
            would love to hear from you.
          </p>

          <p className="mt-6 text-lg text-gray-600 font-semibold">
            Website created by <span className="text-blue-700">Bidisha Kundu</span>
          </p>
          <div className="avatar">
  <div className="ring-primary mt-2 ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="/me.jpg" alt="Banner" width={150}
  height={150}/>
  </div>
</div>
          <p className="mt-4 text-lg text-gray-600">
            📩 For any furthur inquiries, feel free to reach out at:{" "}
            <a
              href="mailto:bidishakundu07@gmail.com"
              className="text-blue-700 hover:underline"
            >
              bidishakundu07@gmail.com
            </a>

          </p>
        </div>
      </div>
    );
  };
  
export default AboutUs;
