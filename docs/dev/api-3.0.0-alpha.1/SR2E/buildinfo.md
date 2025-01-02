# BuildInfo

Namespace: SR2E

SR2E Build information. Please do not edit anything other than version numbers.

```csharp
public static class BuildInfo
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [BuildInfo](/docs/dev/api-3.0.0-alpha.1/sr2e/buildinfo)<br />
Attributes [NullableContextAttribute](/docs/dev/api-3.0.0-alpha.1/system/runtime/compilerservices/nullablecontextattribute), [NullableAttribute](/docs/dev/api-3.0.0-alpha.1/system/runtime/compilerservices/nullableattribute)

## Fields

### **Name**

```csharp
public static string Name;
```

### **Description**

```csharp
public static string Description;
```

### **Author**

```csharp
public static string Author;
```

### **CoAuthor**

```csharp
public static string CoAuthor;
```

### **CodeVersion**

```csharp
public static string CodeVersion;
```

### **DownloadLink**

```csharp
public static string DownloadLink;
```

### **DisplayVersion**

Should be the same as CodeVersion unless this is non release build.
 For alpha versions, add "-alpha.buildnumber" e.g 3.0.0-alpha.5
 For beta versions, add "-beta.buildnumber" e.g 3.0.0-beta.12
 For dev versions, use "-dev". Do not add a build number!
 Add "+metadata" only in dev builds!

```csharp
public static string DisplayVersion;
```
