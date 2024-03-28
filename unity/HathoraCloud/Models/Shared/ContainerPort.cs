
//------------------------------------------------------------------------------
// <auto-generated>
// This code was generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
//
// Changes to this file may cause incorrect behavior and will be lost when
// the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
#nullable enable
namespace HathoraCloud.Models.Shared
{
    using HathoraCloud.Models.Shared;
    using Newtonsoft.Json;
    using System;
    using UnityEngine;
    
    /// <summary>
    /// A container port object represents the transport configruations for how your server will listen.
    /// </summary>
    [Serializable]
    public class ContainerPort
    {

        /// <summary>
        /// Readable name for the port.
        /// </summary>
        [SerializeField]
        [JsonProperty("name")]
        public string Name { get; set; } = default!;

        [SerializeField]
        [JsonProperty("port")]
        public int Port { get; set; } = default!;

        /// <summary>
        /// Transport type specifies the underlying communication protocol to the exposed port.
        /// </summary>
        [SerializeField]
        [JsonProperty("transportType")]
        public TransportType TransportType { get; set; } = default!;
    }
}