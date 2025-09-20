import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, Sparkles, Calendar, Shield, Edit3 } from "lucide-react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen bg-base-200 pt-20">
      <div className="max-w-4xl mx-auto p-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-base-100 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-base-300">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <h1 className="text-3xl font-bold text-base-content">
              Your Profile
            </h1>
          </div>
          <p className="mt-3 text-base-content/60 text-lg">
            Manage your personal information and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Picture Section */}
          <div className="lg:col-span-1">
            <div className="bg-base-100 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-base-300">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-lg opacity-30 animate-pulse"></div>
                  <div className="relative">
                    <img
                      src={selectedImg || authUser.profilePic || "/avatar.png"}
                      alt="Profile"
                      className="size-40 rounded-full object-cover border-4 border-base-200 shadow-2xl transition-all duration-300 hover:scale-105"
                    />
                    <label
                      htmlFor="avatar-upload"
                      className={`
                        absolute -bottom-2 -right-2 
                        bg-primary hover:bg-primary-focus
                        p-3 rounded-full cursor-pointer shadow-lg
                        transition-all duration-300 hover:scale-110 hover:shadow-xl
                        ${isUpdatingProfile ? "animate-pulse pointer-events-none opacity-70" : "hover:animate-bounce"}
                      `}
                    >
                      <Camera className="w-6 h-6 text-primary-content" />
                      <input
                        type="file"
                        id="avatar-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUpdatingProfile}
                      />
                    </label>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isUpdatingProfile 
                      ? "bg-warning/20 text-warning" 
                      : "bg-success/20 text-success"
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${isUpdatingProfile ? "bg-warning animate-pulse" : "bg-success"}`}></div>
                    {isUpdatingProfile ? "Uploading..." : "Click camera to update"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Information Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information Card */}
            <div className="bg-base-100 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-base-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-base-content">Personal Information</h2>
              </div>
              
              <div className="space-y-4">
                <div className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-base-content/60">Full Name</span>
                  </div>
                  <div className="bg-base-200 rounded-xl p-4 border border-base-300 transition-all duration-300 group-hover:shadow-md">
                    <p className="text-base-content font-medium">{authUser?.fullName}</p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-base-content/60">Email Address</span>
                  </div>
                  <div className="bg-base-200 rounded-xl p-4 border border-base-300 transition-all duration-300 group-hover:shadow-md">
                    <p className="text-base-content font-medium">{authUser?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Information Card */}
            <div className="bg-base-100 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-base-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Shield className="w-5 h-5 text-success" />
                </div>
                <h2 className="text-xl font-semibold text-base-content">Account Details</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium text-base-content">Member Since</span>
                  </div>
                  <span className="text-primary font-semibold">
                    {authUser?.createdAt ? new Date(authUser.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long", 
                      day: "numeric"
                    }) : "Not available"}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-success/5 rounded-xl border border-success/20">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-success" />
                    <span className="font-medium text-base-content">Account Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-success font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;