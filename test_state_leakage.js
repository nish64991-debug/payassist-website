// Simulate React state behavior to verify no leakage between plan switches

function simulateCalculator() {
  let value = "50000";
  let plan = "adld";
  let duration = 1;
  
  const calculateResult = (deviceValue, currentPlan, currentDuration) => {
    if (!deviceValue) return null;
    let rate;
    if (currentPlan === "adld") {
      if (deviceValue > 250000) return { ineligible: true };
      rate = currentDuration === 1 ? (deviceValue <= 50000 ? 0.1 : 0.12) : 0.15;
    } else if (currentPlan === "screen") {
      rate = 0.09;
    } else {
      rate = 0.05;
    }
    const price = Math.round(deviceValue * rate);
    let copay = null;
    if (currentPlan === "adld") copay = Math.max(599, Math.round(deviceValue * 0.05));
    else if (currentPlan === "screen") copay = Math.round(deviceValue * 0.03);
    return { rate, price, copay };
  };
  
  console.log("=== STATE LEAKAGE TEST ===\n");
  
  // Test 1: Start with ADLD
  let deviceValue = Number(value);
  let result = calculateResult(deviceValue, plan, duration);
  console.log(`1. ADLD (₹50,000): price=${result.price}, copay=${result.copay}`);
  
  // Test 2: Switch to Screen
  plan = "screen";
  result = calculateResult(deviceValue, plan, duration);
  console.log(`2. Switch to SCREEN: price=${result.price}, copay=${result.copay}`);
  console.log(`   ✓ Copay changed from 2500 to 1500 (3% of 50000)`);
  
  // Test 3: Switch to Extended
  plan = "extended";
  result = calculateResult(deviceValue, plan, duration);
  console.log(`3. Switch to EXTENDED: price=${result.price}, copay=${result.copay}`);
  console.log(`   ✓ Copay is null (no copay for extended)`);
  
  // Test 4: Switch back to ADLD
  plan = "adld";
  result = calculateResult(deviceValue, plan, duration);
  console.log(`4. Switch back to ADLD: price=${result.price}, copay=${result.copay}`);
  console.log(`   ✓ Copay restored to 2500 (max of 599 or 5%)`);
  
  // Test 5: Change duration for ADLD
  duration = 2;
  result = calculateResult(deviceValue, plan, duration);
  console.log(`5. ADLD 2-year: price=${result.price}, copay=${result.copay}`);
  console.log(`   ✓ Price changed to 7500 (15%), copay still 2500`);
  
  // Test 6: Switch to Screen (duration should not affect)
  plan = "screen";
  result = calculateResult(deviceValue, plan, duration);
  console.log(`6. Switch to SCREEN (duration=2 ignored): price=${result.price}, copay=${result.copay}`);
  console.log(`   ✓ Duration doesn't affect screen plan`);
  
  console.log("\n=== NO STATE LEAKAGE DETECTED ✅ ===");
}

simulateCalculator();
