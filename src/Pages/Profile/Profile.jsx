import { useState } from "react";
import {
  LuUser,
  LuMail,
  LuMapPin,
  LuGlobe,
  LuCalendar,
  LuShield,
  LuSave,
  LuX,
  LuSettings,
  LuLock,
  LuCircleAlert,
  LuCircleCheck,
  LuPencil,
} from "react-icons/lu";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Ak Azad hosen",
    email: "akazad9143@example.com",
    personal_email: "personal1@example.com",
    address: "Dhaka, Bangladesh",
    country: "Bangladesh",
    username: "akazad1",
  });

  // Mock user data from API response
  const userData = {
    _id: "68bd2d079b2c273266b08643",
    name: "Ak Azad hosen",
    email: "akazad9143@example.com",
    personal_email: "personal1@example.com",
    address: "Dhaka, Bangladesh",
    country: "Bangladesh",
    role: "user",
    status: "active",
    isVerified: false,
    isDeleted: false,
    createdAt: "2025-09-07T06:58:15.182Z",
    updatedAt: "2025-09-07T06:58:15.182Z",
    username: "akazad1",
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Here you would call your API to update user data
    console.log("Saving profile data:", formData);
    setIsEditing(false);
    // Show success message
  };

  const handleCancel = () => {
    // Reset form data to original values
    setFormData({
      name: userData.name,
      email: userData.email,
      personal_email: userData.personal_email,
      address: userData.address,
      country: userData.country,
      username: userData.username,
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="flex items-center space-x-4">
              {/* Profile Avatar */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white">
                {getInitials(userData.name)}
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {userData.name}
                </h1>
                <p className="text-gray-600">@{userData.username}</p>
                <div className="mt-2 flex items-center">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      userData.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <span
                      className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
                        userData.status === "active"
                          ? "bg-green-400"
                          : "bg-gray-400"
                      }`}
                    ></span>
                    {userData.status}
                  </span>

                  <span
                    className={`ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      userData.isVerified
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {userData.isVerified ? (
                      <LuCircleCheck className="mr-1 h-3 w-3" />
                    ) : (
                      <LuCircleAlert className="mr-1 h-3 w-3" />
                    )}
                    {userData.isVerified ? "Verified" : "Unverified"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-0">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-700"
                >
                  <LuPencil className="mr-2 h-4 w-4" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-green-700"
                  >
                    <LuSave className="mr-2 h-4 w-4" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="inline-flex items-center rounded-md bg-gray-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-600"
                  >
                    <LuX className="mr-2 h-4 w-4" />
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 flex items-center text-lg font-semibold text-gray-900">
                <LuUser className="mr-2 h-5 w-5 text-red-600" />
                Profile Information
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">{userData.name}</p>
                  )}
                </div>

                {/* Username */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">@{userData.username}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <LuMail className="mr-1 inline h-4 w-4" />
                    Primary Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">{userData.email}</p>
                  )}
                </div>

                {/* Personal Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Personal Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="personal_email"
                      value={formData.personal_email}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">
                      {userData.personal_email}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <LuMapPin className="mr-1 inline h-4 w-4" />
                    Address
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">{userData.address}</p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <LuGlobe className="mr-1 inline h-4 w-4" />
                    Country
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">{userData.country}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Account Details & Quick Actions */}
          <div className="space-y-6">
            {/* Account Details */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                <LuShield className="mr-2 h-5 w-5 text-red-600" />
                Account Details
              </h2>

              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-600">Role</span>
                  <p className="font-medium capitalize text-gray-900">
                    {userData.role}
                  </p>
                </div>

                <div>
                  <span className="text-sm text-gray-600">Member Since</span>
                  <p className="flex items-center font-medium text-gray-900">
                    <LuCalendar className="mr-1 h-4 w-4" />
                    {formatDate(userData.createdAt)}
                  </p>
                </div>

                <div>
                  <span className="text-sm text-gray-600">Last Updated</span>
                  <p className="font-medium text-gray-900">
                    {formatDate(userData.updatedAt)}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                <LuSettings className="mr-2 h-5 w-5 text-red-600" />
                Quick Actions
              </h2>

              <div className="space-y-3">
                <button className="flex w-full items-center rounded-md px-4 py-3 text-left text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50">
                  <LuLock className="mr-3 h-4 w-4" />
                  Change Password
                </button>

                {!userData.isVerified && (
                  <button className="flex w-full items-center rounded-md px-4 py-3 text-left text-sm text-blue-700 transition-colors duration-200 hover:bg-blue-50">
                    <LuCircleCheck className="mr-3 h-4 w-4" />
                    Verify Account
                  </button>
                )}

                <button className="flex w-full items-center rounded-md px-4 py-3 text-left text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50">
                  <LuShield className="mr-3 h-4 w-4" />
                  Security Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
