# BuildInfo

Namespace: SR2E

SR2E Build information. Please do not edit anything other than version numbers.

```csharp
public static class BuildInfo
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [BuildInfo](/docs/dev/api/sr2e/buildinfo)

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

### **Version**

```csharp
public static string Version;
```

### **DownloadLink**

```csharp
public static string DownloadLink;
```

### **DisplayVersion**

Should be the same as Version unless this is a special build. For beta please use [version]b[beta-number].
 For alpha use [version]a[alpha-number].
 For development builds please use [version]d[build-number | commit-id | time]

```csharp
public static string DisplayVersion;
```
