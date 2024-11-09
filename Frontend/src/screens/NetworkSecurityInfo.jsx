import React from "react";
import passwordSecurityImage from "../assets/passwordSecurityImage.jpeg";
import phishingImage from "../assets/phishingImage.jpeg";
import firewallImage from "../assets/firewall.webp";
import vpnImage from "../assets/vpnImage.jpeg";
import encryptionImage from "../assets/encryptionImage.jpeg";
import monitoringImage from "../assets/monitoringImage.jpeg";
import backup from "../assets/backup.jpg";
import accessControlImage from "../assets/accessControlImage.jpeg";
import malwareProtectionImage from "../assets/malwareProtectionImage.jpeg";
import ids from "../assets/ids.jpeg";

import { FaUserShield, FaLock, FaShieldAlt, FaWifi, FaShieldVirus, FaDatabase, FaFingerprint, FaEye } from "react-icons/fa";

function NetworkSecurityInfo() {
  return (
    <div id="network-security" className="py-20 px-6 bg-gray-50 text-gray-900">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Comprehensive Network Security Insights</h2>

      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Identity Verification */}
        <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
          <div className="p-6 bg-blue-200 text-blue-800">
            <FaUserShield size={36} className="mb-3" />
            <h3 className="text-xl font-semibold mb-3">Identity Verification</h3>
          </div>
          <img src={phishingImage} alt="Identity Verification" className="w-full h-60 object-cover" />
          <div className="p-6">
            <p className="text-gray-700">
              Identity verification is crucial in preventing unauthorized access. Multi-factor authentication (MFA) adds an additional layer of security by requiring more than one form of verification.
            </p>
          </div>
        </div>

        {/* Data Encryption */}
        <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
          <div className="p-6 bg-green-200 text-green-800">
            <FaLock size={36} className="mb-3" />
            <h3 className="text-xl font-semibold mb-3">Data Encryption</h3>
          </div>
          <img src={encryptionImage} alt="Data Encryption" className="w-full h-60 object-cover" />
          <div className="p-6">
            <p className="text-gray-700">
              Encryption converts data into unreadable code to prevent unauthorized access. Ensure sensitive data is encrypted both at rest and in transit to keep it secure.
            </p>
          </div>
        </div>

       
        {/* Secure Wi-Fi Access */}
        <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
          <div className="p-6 bg-purple-200 text-purple-800">
            <FaWifi size={36} className="mb-3" />
            <h3 className="text-xl font-semibold mb-3">Secure Wi-Fi Access</h3>
          </div>
          <img src={vpnImage} alt="Secure Wi-Fi Access" className="w-full h-60 object-cover" />
          <div className="p-6">
            <p className="text-gray-700">
              Using secure Wi-Fi access, especially on public networks, protects against unauthorized access. VPNs enhance security by encrypting connections on public Wi-Fi.
            </p>
          </div>
        </div>

         {/* Intrusion Detection Systems */}
         <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
          <div className="p-6 bg-red-200 text-red-800">
            <FaShieldAlt size={36} className="mb-3" />
            <h3 className="text-xl font-semibold mb-3">Intrusion Detection Systems</h3>
          </div>
          <img src={ids} alt="Intrusion Detection Systems" className="w-full h-60 object-cover" />
          <div className="p-6">
            <p className="text-gray-700">
              Intrusion Detection Systems (IDS) monitor network traffic for suspicious activities and potential threats, alerting administrators to possible security breaches.
            </p>
          </div>
        </div>


        {/* Access Control */}
        <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
          <div className="p-6 bg-orange-200 text-orange-800">
            <FaFingerprint size={36} className="mb-3" />
            <h3 className="text-xl font-semibold mb-3">Access Control</h3>
          </div>
          <img src={accessControlImage} alt="Access Control" className="w-full h-60 object-cover" />
          <div className="p-6">
            <p className="text-gray-700">
              Access control limits network access to authorized users only. Implementing role-based access helps protect sensitive data from unauthorized personnel.
            </p>
          </div>
        </div>

        {/* Malware Protection */}
        <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
          <div className="p-6 bg-teal-200 text-teal-800">
            <FaShieldVirus size={36} className="mb-3" />
            <h3 className="text-xl font-semibold mb-3">Malware Protection</h3>
          </div>
          <img src={malwareProtectionImage} alt="Malware Protection" className="w-full h-60 object-cover" />
          <div className="p-6">
            <p className="text-gray-700">
              Malware protection software detects and removes malicious software, such as viruses and ransomware, safeguarding your network from damaging attacks.
            </p>
          </div>
        </div>

        {/* Data Backup and Recovery */}
        <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
          <div className="p-6 bg-indigo-200 text-indigo-800">
            <FaDatabase size={36} className="mb-3" />
            <h3 className="text-xl font-semibold mb-3">Data Backup & Recovery</h3>
          </div>
          <img src={backup} alt="Data Backup and Recovery" className="w-full h-60 object-cover" />
          <div className="p-6">
            <p className="text-gray-700">
              Regular data backups ensure that critical information is not lost during cyber incidents. A robust recovery plan minimizes downtime and data loss.
            </p>
          </div>
        </div>

        {/* Network Monitoring */}
        <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
          <div className="p-6 bg-yellow-200 text-yellow-800">
            <FaEye size={36} className="mb-3" />
            <h3 className="text-xl font-semibold mb-3">Continuous Network Monitoring</h3>
          </div>
          <img src={monitoringImage} alt="Continuous Network Monitoring" className="w-full h-60 object-cover" />
          <div className="p-6">
            <p className="text-gray-700">
              Continuous network monitoring provides real-time insights into network performance and security threats, allowing for timely responses to anomalies.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default NetworkSecurityInfo;
