# UtilCommand

Namespace: SR2E.Commands

```csharp
public class UtilCommand : SR2E.SR2ECommand
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SR2ECommand](/docs/dev/api/sr2e/sr2ecommand) → [UtilCommand](/docs/dev/api/sr2e/commands/utilcommand)

## Fields

### **disabledActors**

```csharp
public List<string> disabledActors;
```

### **playerColliderHeightBase**

```csharp
public static float playerColliderHeightBase;
```

### **playerColliderRadBase**

```csharp
public static float playerColliderRadBase;
```

### **silent**

```csharp
public bool silent;
```

## Properties

### **ID**

```csharp
public string ID { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **Usage**

```csharp
public string Usage { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **type**

```csharp
public CommandType type { get; }
```

#### Property Value

[CommandType](/docs/dev/api/sr2e/commandtype)<br></br>

### **maskForGordo**

```csharp
public static LayerMask maskForGordo { get; }
```

#### Property Value

LayerMask<br></br>

### **Description**

The description of this command

```csharp
public string Description { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **ExtendedDescription**

The full description of this command

```csharp
public string ExtendedDescription { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **Hidden**

```csharp
public bool Hidden { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **execWhenIsOpenConsole**

Allows the execution of the Command when the console is open

```csharp
public bool execWhenIsOpenConsole { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **execWhenIsOpenCheatMenu**

Allows the execution of the Command when the cheat menu is open

```csharp
public bool execWhenIsOpenCheatMenu { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **execWhenIsOpenModMenu**

Allows the execution of the Command when the mod menu is open

```csharp
public bool execWhenIsOpenModMenu { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

## Constructors

### **UtilCommand()**

```csharp
public UtilCommand()
```

## Methods

### **GetAutoComplete(Int32, String[])**

```csharp
public List<string> GetAutoComplete(int argIndex, String[] args)
```

#### Parameters

`argIndex` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br></br>

`args` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[List&lt;String&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br></br>

### **Execute(String[])**

```csharp
public bool Execute(String[] args)
```

#### Parameters

`args` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **ExcGordo(String[])**

```csharp
public bool ExcGordo(String[] cmd)
```

#### Parameters

`cmd` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **ExcSlime(String[])**

```csharp
public bool ExcSlime(String[] cmd)
```

#### Parameters

`cmd` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **ExcGame(String[])**

```csharp
public bool ExcGame(String[] cmd)
```

#### Parameters

`cmd` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **ExcPlayer(String[])**

```csharp
public bool ExcPlayer(String[] cmd)
```

#### Parameters

`cmd` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **ExcGadget(String[])**

```csharp
public bool ExcGadget(String[] cmd)
```

#### Parameters

`cmd` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **SlimeEmotion(Boolean, Emotion, String)**

```csharp
public bool SlimeEmotion(bool isGet, Emotion emotion, string valString)
```

#### Parameters

`isGet` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`emotion` Emotion<br></br>

`valString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **ToggleActorZeroGrav(Boolean, String)**

```csharp
public bool ToggleActorZeroGrav(bool isGet, string gravity)
```

#### Parameters

`isGet` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`gravity` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **OnMainMenuUILoad()**

```csharp
public void OnMainMenuUILoad()
```

### **GordoSize(Boolean, String)**

```csharp
public bool GordoSize(bool isGet, string sizeString)
```

#### Parameters

`isGet` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`sizeString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **GordoEatenAmount(Boolean, String)**

```csharp
public bool GordoEatenAmount(bool isGet, string amountString)
```

#### Parameters

`isGet` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`amountString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **PrintGordoID()**

```csharp
public bool PrintGordoID()
```

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **ToggleActorType(Boolean, String, String)**

```csharp
public bool ToggleActorType(bool isGet, string identName, string action)
```

#### Parameters

`isGet` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`identName` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

`action` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **PlayerSize(Boolean, String)**

```csharp
public bool PlayerSize(bool isGet, string sizeString)
```

#### Parameters

`isGet` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`sizeString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **RemoteExc_PlayerSize(Single)**

```csharp
public static void RemoteExc_PlayerSize(float size)
```

#### Parameters

`size` [Single](https://docs.microsoft.com/en-us/dotnet/api/system.single)<br></br>

### **PlayerGravity(Boolean, String)**

```csharp
public bool PlayerGravity(bool isGet, string levelString)
```

#### Parameters

`isGet` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`levelString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **GadgetPos(Boolean, String, String, String)**

```csharp
public bool GadgetPos(bool isGet, string xString, string yString, string zString)
```

#### Parameters

`isGet` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`xString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

`yString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

`zString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **GadgetRot(Boolean, String, String, String)**

```csharp
public bool GadgetRot(bool isGet, string xString, string yString, string zString)
```

#### Parameters

`isGet` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`xString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

`yString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

`zString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **PlayerVacModeSet(Boolean, Boolean, String)**

```csharp
public static bool PlayerVacModeSet(bool isGet, bool silent, string modeString)
```

#### Parameters

`isGet` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`silent` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`modeString` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **OnPlayerCoreLoad()**

```csharp
public void OnPlayerCoreLoad()
```
