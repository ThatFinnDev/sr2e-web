# SR2EFeatureFlags

Namespace: SR2E

```csharp
public static class SR2EFeatureFlags
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SR2EFeatureFlags](/docs/dev/api/sr2e/sr2efeatureflags)<br></br>
Attributes [ExtensionAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.extensionattribute)

## Properties

### **enabledCommands**

```csharp
public static CommandType enabledCommands { get; }
```

#### Property Value

[CommandType](/docs/dev/api/sr2e/commandtype)<br></br>

### **flags**

```csharp
public static FeatureFlag flags { get; }
```

#### Property Value

[FeatureFlag](/docs/dev/api/sr2e/featureflag)<br></br>

## Methods

### **HasFlag(FeatureFlag)**

```csharp
public static bool HasFlag(FeatureFlag featureFlag)
```

#### Parameters

`featureFlag` [FeatureFlag](/docs/dev/api/sr2e/featureflag)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **Get(FeatureIntegerValue)**

```csharp
public static int Get(FeatureIntegerValue featureIntegerValue)
```

#### Parameters

`featureIntegerValue` [FeatureIntegerValue](/docs/dev/api/sr2e/featureintegervalue)<br></br>

#### Returns

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br></br>

### **Get(FeatureStringValue)**

```csharp
public static string Get(FeatureStringValue featureStringValue)
```

#### Parameters

`featureStringValue` [FeatureStringValue](/docs/dev/api/sr2e/featurestringvalue)<br></br>

#### Returns

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **GetDefault(FeatureIntegerValue)**

```csharp
public static int GetDefault(FeatureIntegerValue featureIntegerValue)
```

#### Parameters

`featureIntegerValue` [FeatureIntegerValue](/docs/dev/api/sr2e/featureintegervalue)<br></br>

#### Returns

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br></br>

### **GetDefault(FeatureStringValue)**

```csharp
public static string GetDefault(FeatureStringValue featureStringValue)
```

#### Parameters

`featureStringValue` [FeatureStringValue](/docs/dev/api/sr2e/featurestringvalue)<br></br>

#### Returns

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>
