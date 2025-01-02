# SR2EFeatureFlags

Namespace: SR2E

```csharp
public static class SR2EFeatureFlags
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SR2EFeatureFlags](/docs/dev/api-3.0.0-alpha.1/sr2e/sr2efeatureflags)<br />
Attributes [NullableContextAttribute](/docs/dev/api-3.0.0-alpha.1/system/runtime/compilerservices/nullablecontextattribute), [NullableAttribute](/docs/dev/api-3.0.0-alpha.1/system/runtime/compilerservices/nullableattribute), [ExtensionAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.extensionattribute)

## Properties

### **enabledCommands**

```csharp
public static CommandType enabledCommands { get; }
```

#### Property Value

[CommandType](/docs/dev/api-3.0.0-alpha.1/sr2e/commandtype)<br />

### **flags**

```csharp
public static Boolean[] flags { get; }
```

#### Property Value

[Boolean[]](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

## Methods

### **HasFlag(FeatureFlag)**

```csharp
public static bool HasFlag(FeatureFlag featureFlag)
```

#### Parameters

`featureFlag` [FeatureFlag](/docs/dev/api-3.0.0-alpha.1/sr2e/featureflag)<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **HasFlag(Boolean[], FeatureFlag)**

```csharp
public static bool HasFlag(Boolean[] array, FeatureFlag featureFlag)
```

#### Parameters

`array` [Boolean[]](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

`featureFlag` [FeatureFlag](/docs/dev/api-3.0.0-alpha.1/sr2e/featureflag)<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **HasFlag(FeatureFlag[], FeatureFlag)**

```csharp
public static bool HasFlag(FeatureFlag[] array, FeatureFlag featureFlag)
```

#### Parameters

`array` [FeatureFlag[]](/docs/dev/api-3.0.0-alpha.1/sr2e/featureflag)<br />

`featureFlag` [FeatureFlag](/docs/dev/api-3.0.0-alpha.1/sr2e/featureflag)<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **HasFlag(List&lt;FeatureFlag&gt;, FeatureFlag)**

```csharp
public static bool HasFlag(List<FeatureFlag> list, FeatureFlag featureFlag)
```

#### Parameters

`list` [List&lt;FeatureFlag&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

`featureFlag` [FeatureFlag](/docs/dev/api-3.0.0-alpha.1/sr2e/featureflag)<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **Get(FeatureIntegerValue)**

```csharp
public static int Get(FeatureIntegerValue featureIntegerValue)
```

#### Parameters

`featureIntegerValue` [FeatureIntegerValue](/docs/dev/api-3.0.0-alpha.1/sr2e/featureintegervalue)<br />

#### Returns

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### **Get(FeatureStringValue)**

```csharp
public static string Get(FeatureStringValue featureStringValue)
```

#### Parameters

`featureStringValue` [FeatureStringValue](/docs/dev/api-3.0.0-alpha.1/sr2e/featurestringvalue)<br />

#### Returns

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **GetDefault(FeatureIntegerValue)**

```csharp
public static int GetDefault(FeatureIntegerValue featureIntegerValue)
```

#### Parameters

`featureIntegerValue` [FeatureIntegerValue](/docs/dev/api-3.0.0-alpha.1/sr2e/featureintegervalue)<br />

#### Returns

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

### **GetDefault(FeatureStringValue)**

```csharp
public static string GetDefault(FeatureStringValue featureStringValue)
```

#### Parameters

`featureStringValue` [FeatureStringValue](/docs/dev/api-3.0.0-alpha.1/sr2e/featurestringvalue)<br />

#### Returns

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
