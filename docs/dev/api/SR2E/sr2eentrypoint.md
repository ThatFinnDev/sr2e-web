# SR2EEntryPoint

Namespace: SR2E

```csharp
public class SR2EEntryPoint : MelonLoader.MelonMod
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → MelonBase → MelonTypeBase&lt;MelonMod&gt; → MelonMod → [SR2EEntryPoint](/docs/dev/api/sr2e/sr2eentrypoint)

## Fields

### **OnRegister**

```csharp
public MelonEvent OnRegister;
```

### **OnUnregister**

```csharp
public MelonEvent OnUnregister;
```

## Properties

### **isLatestVersion**

Is true, if no new version of SR2E has been found. It's also true, if
 the user has no internet or the github servers blocked.

```csharp
public static bool isLatestVersion { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **InfoAttribute**

#### Caution

Use MelonBase.Info instead.

---

```csharp
public MelonModInfoAttribute InfoAttribute { get; }
```

#### Property Value

MelonModInfoAttribute<br></br>

### **GameAttributes**

#### Caution

Use MelonBase.Games instead.

---

```csharp
public MelonModGameAttribute[] GameAttributes { get; }
```

#### Property Value

MelonModGameAttribute[]<br></br>

### **MelonTypeName**

```csharp
public string MelonTypeName { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **MelonAssembly**

```csharp
public MelonAssembly MelonAssembly { get; internal set; }
```

#### Property Value

MelonAssembly<br></br>

### **Priority**

```csharp
public int Priority { get; internal set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br></br>

### **ConsoleColor**

```csharp
public Color ConsoleColor { get; internal set; }
```

#### Property Value

Color<br></br>

### **AuthorConsoleColor**

```csharp
public Color AuthorConsoleColor { get; internal set; }
```

#### Property Value

Color<br></br>

### **Info**

```csharp
public MelonInfoAttribute Info { get; internal set; }
```

#### Property Value

MelonInfoAttribute<br></br>

### **AdditionalCredits**

```csharp
public MelonAdditionalCreditsAttribute AdditionalCredits { get; internal set; }
```

#### Property Value

MelonAdditionalCreditsAttribute<br></br>

### **SupportedProcesses**

```csharp
public MelonProcessAttribute[] SupportedProcesses { get; internal set; }
```

#### Property Value

MelonProcessAttribute[]<br></br>

### **Games**

```csharp
public MelonGameAttribute[] Games { get; internal set; }
```

#### Property Value

MelonGameAttribute[]<br></br>

### **SupportedGameVersions**

```csharp
public MelonGameVersionAttribute[] SupportedGameVersions { get; internal set; }
```

#### Property Value

MelonGameVersionAttribute[]<br></br>

### **OptionalDependencies**

```csharp
public MelonOptionalDependenciesAttribute OptionalDependencies { get; internal set; }
```

#### Property Value

MelonOptionalDependenciesAttribute<br></br>

### **SupportedPlatforms**

```csharp
public MelonPlatformAttribute SupportedPlatforms { get; internal set; }
```

#### Property Value

MelonPlatformAttribute<br></br>

### **SupportedDomain**

```csharp
public MelonPlatformDomainAttribute SupportedDomain { get; internal set; }
```

#### Property Value

MelonPlatformDomainAttribute<br></br>

### **SupportedMLVersion**

```csharp
public VerifyLoaderVersionAttribute SupportedMLVersion { get; internal set; }
```

#### Property Value

VerifyLoaderVersionAttribute<br></br>

### **SupportedMLBuild**

```csharp
public VerifyLoaderBuildAttribute SupportedMLBuild { get; internal set; }
```

#### Property Value

VerifyLoaderBuildAttribute<br></br>

### **HarmonyInstance**

```csharp
public Harmony HarmonyInstance { get; internal set; }
```

#### Property Value

Harmony<br></br>

### **LoggerInstance**

```csharp
public Instance LoggerInstance { get; internal set; }
```

#### Property Value

Instance<br></br>

### **ID**

```csharp
public string ID { get; internal set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **Registered**

```csharp
public bool Registered { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **harmonyInstance**

#### Caution

Please use HarmonyInstance instead.

---

```csharp
public HarmonyInstance harmonyInstance { get; }
```

#### Property Value

HarmonyInstance<br></br>

### **Harmony**

#### Caution

Please use HarmonyInstance instead.

---

```csharp
public HarmonyInstance Harmony { get; }
```

#### Property Value

HarmonyInstance<br></br>

### **Assembly**

#### Caution

Please use MelonAssembly.Assembly instead.

---

```csharp
public Assembly Assembly { get; }
```

#### Property Value

[Assembly](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly)<br></br>

### **HarmonyDontPatchAll**

#### Caution

Please use MelonAssembly.HarmonyDontPatchAll instead.

---

```csharp
public bool HarmonyDontPatchAll { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **Hash**

#### Caution

Please use MelonAssembly.Hash instead.

---

```csharp
public string Hash { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **Location**

#### Caution

Please use MelonAssembly.Location instead.

---

```csharp
public string Location { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

## Constructors

### **SR2EEntryPoint()**

```csharp
public SR2EEntryPoint()
```

## Methods

### **OnLateInitializeMelon()**

```csharp
public void OnLateInitializeMelon()
```

### **OnEarlyInitializeMelon()**

```csharp
public void OnEarlyInitializeMelon()
```

### **OnInitializeMelon()**

```csharp
public void OnInitializeMelon()
```

### **OnApplicationQuit()**

```csharp
public void OnApplicationQuit()
```

### **OnSceneWasLoaded(Int32, String)**

```csharp
public void OnSceneWasLoaded(int buildIndex, string sceneName)
```

#### Parameters

`buildIndex` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br></br>

`sceneName` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **OnSceneWasInitialized(Int32, String)**

```csharp
public void OnSceneWasInitialized(int buildindex, string sceneName)
```

#### Parameters

`buildindex` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br></br>

`sceneName` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **OnSceneWasUnloaded(Int32, String)**

```csharp
public void OnSceneWasUnloaded(int buildIndex, string sceneName)
```

#### Parameters

`buildIndex` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br></br>

`sceneName` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **OnUpdate()**

```csharp
public void OnUpdate()
```

## Events

### **RegisterOptionMenuButtons**

```csharp
public static event EventHandler RegisterOptionMenuButtons;
```
