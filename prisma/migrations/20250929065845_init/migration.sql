-- CreateEnum
CREATE TYPE "public"."Language" AS ENUM ('ENGLISH', 'MALAYALAM');

-- CreateEnum
CREATE TYPE "public"."WaterSource" AS ENUM ('CANAL', 'BOREWELL', 'RAIN_FED', 'RIVER', 'POND', 'MIXED');

-- CreateEnum
CREATE TYPE "public"."LifecycleStage" AS ENUM ('LAND_PREPARATION', 'NURSERY', 'TRANSPLANTING', 'VEGETATIVE_GROWTH', 'REPRODUCTIVE_GROWTH', 'MATURATION', 'HARVEST', 'POST_HARVEST');

-- CreateEnum
CREATE TYPE "public"."SevaCategory" AS ENUM ('LAND_PREPARATION', 'WATER_MANAGEMENT', 'NUTRIENT_MANAGEMENT', 'PEST_DISEASE_CONTROL', 'HARVEST_POST_HARVEST', 'SUSTAINABILITY', 'COMMUNITY');

-- CreateEnum
CREATE TYPE "public"."Difficulty" AS ENUM ('BEGINNER', 'EASY', 'MEDIUM', 'HARD', 'EXPERT');

-- CreateEnum
CREATE TYPE "public"."SevaStatus" AS ENUM ('ASSIGNED', 'STARTED', 'IN_PROGRESS', 'PENDING_VERIFICATION', 'COMPLETED', 'SKIPPED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "public"."BadgeType" AS ENUM ('WATER_GUARDIAN', 'SOIL_FRIEND', 'ORGANIC_CHAMPION', 'KNOWLEDGE_SEEKER', 'COMMUNITY_LEADER', 'ECO_WARRIOR', 'HARVEST_MASTER');

-- CreateEnum
CREATE TYPE "public"."KnowledgeCategory" AS ENUM ('SUSTAINABLE_METHODS', 'INDIGENOUS_VARIETIES', 'ORGANIC_SOLUTIONS', 'WATER_CONSERVATION', 'SOIL_HEALTH', 'PEST_MANAGEMENT', 'MARKET_INSIGHTS', 'GOVERNMENT_SCHEMES');

-- CreateEnum
CREATE TYPE "public"."ContentType" AS ENUM ('ARTICLE', 'VIDEO', 'INFOGRAPHIC', 'AUDIO', 'INTERACTIVE');

-- CreateEnum
CREATE TYPE "public"."ConsultationCategory" AS ENUM ('PEST_DISEASE', 'WATER_MANAGEMENT', 'SOIL_HEALTH', 'NUTRITION', 'HARVEST', 'MARKETING', 'GENERAL');

-- CreateEnum
CREATE TYPE "public"."ConsultationStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'ANSWERED', 'CLOSED');

-- CreateEnum
CREATE TYPE "public"."Priority" AS ENUM ('LOW', 'NORMAL', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "public"."ItemType" AS ENUM ('INPUT', 'HARVEST');

-- CreateEnum
CREATE TYPE "public"."NotificationType" AS ENUM ('SEVA_ASSIGNED', 'SEVA_REMINDER', 'BADGE_EARNED', 'EXPERT_RESPONSE', 'WEATHER_ALERT', 'COMMUNITY_UPDATE', 'MARKET_INQUIRY', 'SYSTEM_UPDATE');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "image" TEXT,
    "language" "public"."Language" NOT NULL DEFAULT 'ENGLISH',
    "location" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dhanyaPoints" INTEGER NOT NULL DEFAULT 0,
    "totalPoints" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."farm_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "riceVariety" TEXT NOT NULL,
    "waterSource" "public"."WaterSource" NOT NULL,
    "farmSize" DOUBLE PRECISION,
    "currentStage" "public"."LifecycleStage" NOT NULL DEFAULT 'LAND_PREPARATION',
    "sustainabilityScore" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "farm_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sevas" (
    "id" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleMl" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionMl" TEXT NOT NULL,
    "category" "public"."SevaCategory" NOT NULL,
    "lifecycleStage" "public"."LifecycleStage"[],
    "difficulty" "public"."Difficulty" NOT NULL DEFAULT 'EASY',
    "dhanyaValue" INTEGER NOT NULL DEFAULT 10,
    "requiresPhoto" BOOLEAN NOT NULL DEFAULT false,
    "requiresGPS" BOOLEAN NOT NULL DEFAULT false,
    "estimatedTime" INTEGER,
    "waterSources" "public"."WaterSource"[],
    "riceVarieties" TEXT[],
    "instructions" JSONB NOT NULL,
    "videoUrl" TEXT,
    "imageUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sevas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_sevas" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sevaId" TEXT NOT NULL,
    "status" "public"."SevaStatus" NOT NULL DEFAULT 'ASSIGNED',
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "proofPhotoUrl" TEXT,
    "proofLocation" JSONB,
    "notes" TEXT,
    "pointsEarned" INTEGER NOT NULL DEFAULT 0,
    "bonusPoints" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_sevas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."badges" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "public"."BadgeType" NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleMl" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionMl" TEXT NOT NULL,
    "iconUrl" TEXT NOT NULL,
    "earnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "badges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."knowledge_content" (
    "id" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleMl" TEXT NOT NULL,
    "bodyEn" TEXT NOT NULL,
    "bodyMl" TEXT NOT NULL,
    "category" "public"."KnowledgeCategory" NOT NULL,
    "contentType" "public"."ContentType" NOT NULL DEFAULT 'ARTICLE',
    "videoUrl" TEXT,
    "imageUrls" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "readTime" INTEGER,
    "difficulty" "public"."Difficulty" NOT NULL DEFAULT 'BEGINNER',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "knowledge_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."expert_consultations" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "category" "public"."ConsultationCategory" NOT NULL,
    "imageUrls" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "location" JSONB,
    "expertName" TEXT,
    "response" TEXT,
    "responseAt" TIMESTAMP(3),
    "status" "public"."ConsultationStatus" NOT NULL DEFAULT 'PENDING',
    "priority" "public"."Priority" NOT NULL DEFAULT 'NORMAL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "expert_consultations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."community_posts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrls" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "likesCount" INTEGER NOT NULL DEFAULT 0,
    "commentsCount" INTEGER NOT NULL DEFAULT 0,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "moderatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "community_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."comments" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "parentId" TEXT,
    "isApproved" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."likes" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."market_listings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "itemType" "public"."ItemType" NOT NULL,
    "category" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "priceUnit" TEXT NOT NULL,
    "minQuantity" DOUBLE PRECISION,
    "maxQuantity" DOUBLE PRECISION,
    "imageUrls" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "location" JSONB NOT NULL,
    "deliveryRadius" INTEGER,
    "isOrganic" BOOLEAN NOT NULL DEFAULT false,
    "certificationUrl" TEXT,
    "sustainabilityScore" INTEGER,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3),
    "viewsCount" INTEGER NOT NULL DEFAULT 0,
    "inquiriesCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "market_listings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."notifications" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "public"."NotificationType" NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleMl" TEXT NOT NULL,
    "bodyEn" TEXT NOT NULL,
    "bodyMl" TEXT NOT NULL,
    "actionUrl" TEXT,
    "actionData" JSONB,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."weather_data" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" INTEGER NOT NULL,
    "rainfall" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "windSpeed" DOUBLE PRECISION,
    "forecast" JSONB NOT NULL,
    "advice" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "weather_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "public"."users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "farm_profiles_userId_key" ON "public"."farm_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_sevas_userId_sevaId_key" ON "public"."user_sevas"("userId", "sevaId");

-- CreateIndex
CREATE UNIQUE INDEX "likes_postId_userId_key" ON "public"."likes"("postId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "weather_data_location_date_key" ON "public"."weather_data"("location", "date");

-- AddForeignKey
ALTER TABLE "public"."farm_profiles" ADD CONSTRAINT "farm_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_sevas" ADD CONSTRAINT "user_sevas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_sevas" ADD CONSTRAINT "user_sevas_sevaId_fkey" FOREIGN KEY ("sevaId") REFERENCES "public"."sevas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."badges" ADD CONSTRAINT "badges_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."expert_consultations" ADD CONSTRAINT "expert_consultations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."community_posts" ADD CONSTRAINT "community_posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."community_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."likes" ADD CONSTRAINT "likes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."community_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."likes" ADD CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."market_listings" ADD CONSTRAINT "market_listings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
