function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About Fib Finder
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is a simple app to find the Fibonacci number at a specific index.
              The Fibonacci sequence is a series of numbers where each number is the sum
              of the two preceding ones, starting from 0 and 1.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Built with React, Node.js, and powered by Redis for caching calculated values.
              This demonstrates a microservices architecture with Docker containers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
