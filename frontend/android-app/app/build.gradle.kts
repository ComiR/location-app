plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    implementation("androidx.core:core-ktx")
    implementation("androidx.appcompat:appcompat")
    implementation("com.google.android.material:material")
    implementation("androidx.constraintlayout:constraintlayout")
    testImplementation("junit:junit")
    androidTestImplementation("androidx.test.ext:junit")
    androidTestImplementation("androidx.test.espresso:espresso-core")
}

android {
    compileSdk = 30
    defaultConfig {
        applicationId = "com.example.locationapp"
        minSdk = 21
        targetSdk = 30
        versionCode = 1
        versionName = "1.0"
        buildConfigField("String", "API_BASE_URL", "\"https://api.example.com/\"")
    }
    buildTypes {
        getByName("release") {
            isMinifyEnabled = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
        create("staging") {
            initWith(getByName("debug"))
            matchingFallbacks += listOf("debug")
            buildConfigField("String", "API_BASE_URL", "\"https://staging-api.example.com/\"")
        }
        create("development") {
            initWith(getByName("debug"))
            matchingFallbacks += listOf("debug")
            buildConfigField("String", "API_BASE_URL", "\"https://dev-api.example.com/\"")
        }
    }
    lintOptions {
        abortOnError = false
    }
    viewBinding {
        enabled = true
    }
    kotlinOptions {
        jvmTarget = "22"
        freeCompilerArgs += listOf("-Xjvm-default=compatibility")
    }
}
