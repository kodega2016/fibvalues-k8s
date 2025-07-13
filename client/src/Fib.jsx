import React, { Component } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: "",
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  fetchValues = async () => {
    try {
      const { data } = await axios.get("/api/values/current");
      this.setState({ values: data.data });
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch values");
    }
  };

  fetchIndexes = async () => {
    try {
      const { data } = await axios.get("/api/values/all");
      this.setState({ seenIndexes: data.data });
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch values");
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/values", {
        index: this.state.index,
      });
      this.setState({ index: "" });
      toast.success("Value calculated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to calculate value");
    }
  };

  onChange = (event) => {
    this.setState({ index: event.target.value });
  };

  render() {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Fibonacci Calculator
            </h1>
            
            <form onSubmit={this.handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label 
                    htmlFor="index" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Enter your index:
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    id="index"
                    placeholder="Enter the index of the Fibonacci number you want to calculate"
                    value={this.state.index}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 sm:self-end"
                >
                  Calculate
                </button>
              </div>
            </form>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Indexes I have seen:
              </h3>
              <div className="bg-gray-50 rounded-md p-4 min-h-[60px]">
                {this.state.seenIndexes.length > 0 ? (
                  <p className="text-gray-700">
                    {this.state.seenIndexes.map(({ number }) => number).join(", ")}
                  </p>
                ) : (
                  <p className="text-gray-500 italic">No indexes calculated yet</p>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Calculated Values:
              </h3>
              <div className="bg-gray-50 rounded-md p-4 min-h-[60px] max-h-60 overflow-y-auto">
                {Object.entries(this.state.values).length > 0 ? (
                  Object.entries(this.state.values).map(([key, value]) => (
                    <div key={key} className="mb-2 p-2 bg-white rounded border">
                      <span className="font-medium text-blue-600">Index {key}:</span>{" "}
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No values calculated yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
