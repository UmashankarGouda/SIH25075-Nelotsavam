# 🚀 GitHub Setup Instructions

Follow these steps to push your code to GitHub and build APK automatically:

## Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Click "New Repository"** (green button)
3. **Repository name**: `nelotsavam` 
4. **Description**: `Digital Harvest Festival - Rice Farming App for Kerala`
5. **Make it Public** (so GitHub Actions work for free)
6. **DON'T** initialize with README (we already have one)
7. **Click "Create Repository"**

## Step 2: Push Your Code

Copy these commands from GitHub and run them in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/nelotsavam.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

## Step 3: Enable GitHub Actions

1. **Go to your repository** on GitHub
2. **Click "Actions" tab**
3. **If prompted, click "I understand my workflows"**
4. **You should see "Build Nelotsavam APK" workflow**

## Step 4: Build Your APK

### Method 1: Automatic Build
- **Push any changes** to trigger automatic build
- **Go to Actions tab** to see build progress
- **Download APK** from completed workflow artifacts

### Method 2: Manual Build
1. **Go to Actions tab**
2. **Click "Build Nelotsavam APK"**  
3. **Click "Run workflow"** → **"Run workflow"**
4. **Wait for build to complete** (5-10 minutes)
5. **Download APK** from artifacts section

## Step 5: Download Your APK

1. **Go to Actions tab**
2. **Click on latest successful workflow run**
3. **Scroll down to "Artifacts" section**
4. **Click "nelotsavam-debug-apk"** to download
5. **Extract zip file** to get your APK!

## 📱 Your APK Features

✅ **Professional app icon** with rice plant logo  
✅ **Beautiful splash screen** with Malayalam text  
✅ **Complete farming dashboard**  
✅ **User profile with editable fields**  
✅ **Community forum** with post creation  
✅ **Marketplace** for buying/selling  
✅ **Expert consultation** system  
✅ **Learning center** with courses  
✅ **Bilingual support** (English/Malayalam)  
✅ **Camera permissions** for crop photos  
✅ **Location access** for weather data  

## 🎯 Next Steps

1. **Install APK** on Android device
2. **Test all features**
3. **Share with team/judges**
4. **Create signed release** for app store

## 🛠️ Troubleshooting

**If build fails:**
- Check Actions tab for error logs
- Common issues are usually dependency conflicts
- Try pushing a small change to retrigger build

**If APK doesn't install:**
- Enable "Unknown Sources" in Android settings
- Use `adb install app-debug.apk` command

---

**Your Nelotsavam farming app is ready to build! 🌾**