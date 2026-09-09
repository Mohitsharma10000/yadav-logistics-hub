# 🚛 Yadav Logistics Hub

A static website for **M.S. Yadav Transport Service** — a logistics and goods transportation company — deployed on **Amazon S3** as a serverless, static-hosted web application.

---

## 🌐 Live Demo

**Website URL:** http://yadav-logistics-hub-2026-908.s3-website-us-east-1.amazonaws.com

Hosted directly via Amazon S3 Static Website Hosting (no EC2 server involved).

---

## 📖 About the Project

Yadav Logistics Hub is the official website for M.S. Yadav Transport Service, showcasing the company's fleet, services, and transport booking options. The site includes the following sections:

- **Home** – Hero banner with call-to-action buttons (Book Transport / Call Now)
- **About Us** – Company overview
- **Services** – Transportation services offered
- **Fleet** – Vehicle/fleet details
- **Book Transport** – Booking information
- **Contact** – Contact details

---

## 🛠️ Tech Stack

- HTML5, CSS3, JavaScript (static front-end build, output in `dist/`)
- Amazon S3 (static website hosting)
- IAM (access control / bucket policy)

---

## ☁️ Architecture Overview

```
Browser → S3 Bucket Website Endpoint → S3 Static Website Hosting → index.html + assets
```

**Key configuration:**

| Setting | Value |
|---|---|
| Bucket Name | `yadav-logistics-hub-2026-908` |
| Hosting Type | Host a static website |
| Index Document | `index.html` |
| Public Access | Read-only (`s3:GetObject`) via bucket policy |
| Block Public Access | Disabled (required for direct S3 website endpoint) |

**Bucket Policy** (read-only public access, no write/delete permissions granted):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::yadav-logistics-hub-2026-908/*"
    }
  ]
}
```

> **Note:** Amazon CloudFront (CDN + HTTPS via Origin Access Control) was the intended production setup, but was not used in this deployment because CloudFront account verification was pending at the time. See `Case_Study_Report.pdf` for full details and the recommended future improvement.

---

## ⚙️ Setup Instructions

Follow these steps to set up the project locally before deployment.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohitsharma10000/yadav-logistics-hub
   cd your-repository/Source_Code
   ```

2. **Install dependencies** (if the project uses a build tool like Vite/Webpack/npm scripts)
   ```bash
   npm install
   ```

3. **Build the project** (generates the `dist/` folder used for deployment)
   ```bash
   npm run build
   ```

4. **Verify the build output** — confirm `dist/` contains `index.html`, CSS, JS, and asset files.

5. **AWS prerequisites**
   - An AWS account with S3 access
   - AWS CLI installed and configured (`aws configure`) with valid Access Key / Secret Key
   - IAM permissions for `s3:CreateBucket`, `s3:PutObject`, `s3:PutBucketPolicy`, `s3:PutBucketWebsite`

---

## 🚀 Deployment Instructions

1. **Create the S3 bucket**
   ```bash
   aws s3 mb s3://yadav-logistics-hub-2026-908 --region us-east-1
   ```

2. **Disable Block Public Access** on the bucket (required for public static website hosting):
   ```bash
   aws s3api put-public-access-block \
     --bucket yadav-logistics-hub-2026-908 \
     --public-access-block-configuration BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false
   ```

3. **Enable Static Website Hosting**
   ```bash
   aws s3 website s3://yadav-logistics-hub-2026-908/ --index-document index.html
   ```

4. **Attach the bucket policy** (save the JSON above as `bucket-policy.json`):
   ```bash
   aws s3api put-bucket-policy \
     --bucket yadav-logistics-hub-2026-908 \
     --policy file://bucket-policy.json
   ```

5. **Upload the build (`dist/`) contents to the bucket**
   ```bash
   aws s3 sync dist/ s3://yadav-logistics-hub-2026-908/ --delete
   ```

6. **Get the live website URL**
   ```bash
   aws s3api get-bucket-location --bucket yadav-logistics-hub-2026-908
   ```
   URL format: `http://<yadav-logistics-hub-2026-908>.s3-website-<region>.amazonaws.com`

---

## ▶️ Execution Instructions

**Run locally (without deploying):**
```bash
cd Source_Code
npx serve .
```
Then open `http://localhost:3000` (or the port shown) in your browser.

**Run the deployed version:**
Simply open the live S3 website URL in any browser:
```
http://yadav-logistics-hub-2026-908.s3-website-us-east-1.amazonaws.com
```

No backend server, database, or runtime environment is required — the entire site is static.

---

## ✅ Testing Instructions

Manual testing checklist used to validate the deployment:

| # | Test Case | Expected Result |
|---|---|---|
| 1 | Open live S3 website URL | Homepage loads without errors |
| 2 | Check `index.html` loads by default | S3 index document correctly configured |
| 3 | Navigate all sections (Home, About, Services, Fleet, Book Transport, Contact) | Each section renders correctly, no broken links |
| 4 | Check CSS/JS/image assets load | No 403/404 errors in browser console/network tab |
| 5 | Test on mobile viewport | Site is responsive |
| 6 | Try direct object write/delete (e.g., via `PutObject` without credentials) | Request denied — bucket policy only allows `GetObject` |
| 7 | Refresh on a non-root path (if using client-side routing) | Confirm expected S3 behavior (may need error document config) |
| 8 | Verify HTTPS | Currently HTTP only via S3 endpoint (CloudFront pending — see Limitations) |

**Browser console check:** Open DevTools → Network tab → reload the live URL → confirm all assets return `200 OK`.

---

## 📁 Repository Structure

```
YourRollNumber_YourName/
│
├── Case_Study_Report.pdf
├── README.md
├── Source_Code/
├── AWS_Architecture_Diagram.png
└── Screenshots/
    ├── S3_Bucket.png
    ├── Static_Hosting.png
    ├── Permissions.png
    └── Live_Website.png
```



## 📸 Screenshots

Screenshots of the AWS deployment process (bucket creation, static hosting configuration, permissions, and the live site) are available in the `Screenshots/` folder and in `Case_Study_Report.pdf`.

