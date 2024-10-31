object Versions {
    // Kotlin version used for the project
    const val kotlin = "2.0.21"
    
    // Core KTX library version for Android extensions
    const val coreKtx = "1.3.2"
    
    // AppCompat library version for backward compatibility
    const val appCompat = "1.2.0"
    
    // Material Design library version for UI components
    const val material = "1.3.0"
    
    // ConstraintLayout library version for complex layouts
    const val constraintLayout = "2.0.4"
    
    // JUnit version for unit testing
    const val junit = "4.13.2"
    
    // AndroidX JUnit extension version for Android-specific testing
    const val extJunit = "1.1.2"
    
    // Espresso core version for UI testing
    const val espressoCore = "3.3.0"
}

dependencies {
    constraints {
        // Core libraries
        implementation("org.jetbrains.kotlin:kotlin-stdlib:${Versions.kotlin}")
        implementation("androidx.core:core-ktx:${Versions.coreKtx}")
        implementation("androidx.appcompat:appcompat:${Versions.appCompat}")
        implementation("com.google.android.material:material:${Versions.material}")
        implementation("androidx.constraintlayout:constraintlayout:${Versions.constraintLayout}")
        
        // Testing libraries
        testImplementation("junit:junit:${Versions.junit}")
        androidTestImplementation("androidx.test.ext:junit:${Versions.extJunit}")
        androidTestImplementation("androidx.test.espresso:espresso-core:${Versions.espressoCore}")
    }
}
